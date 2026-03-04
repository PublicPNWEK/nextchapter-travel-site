const { getRedisClient } = require('../config/redis');

// Cache middleware
exports.cache = (duration = 300) => {
  return async (req, res, next) => {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next();
    }

    const redisClient = getRedisClient();
    
    // If Redis is not connected, skip caching
    if (!redisClient || !redisClient.isReady) {
      return next();
    }

    // Use application-specific prefix
    const appPrefix = 'nct:';
    const key = `${appPrefix}cache:${req.originalUrl || req.url}`;

    try {
      const cachedData = await redisClient.get(key);
      
      if (cachedData) {
        return res.json(JSON.parse(cachedData));
      }

      // Store original json method
      const originalJson = res.json.bind(res);

      // Override json method to cache response
      res.json = (data) => {
        redisClient.setEx(key, duration, JSON.stringify(data));
        return originalJson(data);
      };

      next();
    } catch (error) {
      console.error('Cache error:', error);
      next();
    }
  };
};

// Clear cache by pattern
exports.clearCache = async (pattern) => {
  const redisClient = getRedisClient();
  
  if (!redisClient || !redisClient.isReady) {
    return false;
  }

  try {
    // Use application-specific prefix to avoid affecting other apps
    const appPrefix = 'nct:';
    const fullPattern = `${appPrefix}${pattern}`;
    const keys = await redisClient.keys(fullPattern);
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
    return true;
  } catch (error) {
    console.error('Clear cache error:', error);
    return false;
  }
};

// Clear all cache for this application only
exports.clearAllCache = async () => {
  const redisClient = getRedisClient();
  
  if (!redisClient || !redisClient.isReady) {
    return false;
  }

  try {
    // Only clear keys with our application prefix
    const appPrefix = 'nct:';
    const keys = await redisClient.keys(`${appPrefix}*`);
    if (keys.length > 0) {
      await redisClient.del(keys);
    }
    return true;
  } catch (error) {
    console.error('Clear all cache error:', error);
    return false;
  }
};
