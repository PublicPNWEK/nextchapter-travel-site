# Production Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### Environment Configuration
- [ ] Copy `.env.example` to `.env`
- [ ] Set `NODE_ENV=production`
- [ ] Generate and set secure `JWT_SECRET` (min 32 characters)
- [ ] Generate and set secure `SESSION_SECRET` (min 32 characters)
- [ ] Configure production `MONGODB_URI`
- [ ] Configure Redis connection (if using)
- [ ] Set production `CLIENT_URL`
- [ ] Configure SMTP settings for emails
- [ ] Remove all development/test credentials

### Security
- [ ] All secrets are environment variables (not hardcoded)
- [ ] `.env` file is in `.gitignore` and NOT committed
- [ ] HTTPS/SSL is configured
- [ ] Security headers are enabled (Helmet)
- [ ] CORS is properly configured for your domain
- [ ] Rate limiting is enabled
- [ ] CSP headers are configured
- [ ] MongoDB authentication is enabled
- [ ] Redis password is set (if using)

### Database
- [ ] MongoDB is running and accessible
- [ ] Database backups are configured
- [ ] Database user has appropriate permissions
- [ ] Connection string uses production credentials
- [ ] Database is indexed for performance
- [ ] Test database connection

### Code
- [ ] All dependencies are installed (`npm install`)
- [ ] No console.logs in production code
- [ ] Error handling is comprehensive
- [ ] API rate limits are appropriate for production
- [ ] Session expiry times are set appropriately
- [ ] Password requirements are enforced

## Deployment Steps

### 1. Prepare Server
- [ ] Server has Node.js v16+ installed
- [ ] Server has MongoDB installed/configured
- [ ] Server has Redis installed (optional)
- [ ] Firewall allows only necessary ports (80, 443, 22)
- [ ] SSH access is secured
- [ ] Create deployment user (non-root)

### 2. Deploy Application
```bash
# Pull latest code
git pull origin main

# Install dependencies
npm install --production

# Run database migrations (if any)
# npm run migrate

# Seed initial data (optional, first time only)
npm run seed

# Build assets (if applicable)
# npm run build

# Test the application
npm test
```

### 3. Configure Process Manager
- [ ] Install PM2: `npm install -g pm2`
- [ ] Start application: `pm2 start server.js --name nextchapter`
- [ ] Configure auto-restart: `pm2 startup`
- [ ] Save process list: `pm2 save`
- [ ] Verify logs: `pm2 logs nextchapter`

### 4. Configure Web Server (Nginx/Apache)
```nginx
# Example Nginx configuration
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 5. Configure SSL/TLS (Let's Encrypt)
```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d yourdomain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

### 6. Setup Monitoring
- [ ] Configure application monitoring (New Relic, DataDog)
- [ ] Setup error tracking (Sentry)
- [ ] Configure uptime monitoring (UptimeRobot, Pingdom)
- [ ] Setup log rotation
- [ ] Configure alerts for errors/downtime

### 7. Backup Strategy
- [ ] Automated MongoDB backups
- [ ] Backup retention policy
- [ ] Test backup restoration
- [ ] Document backup procedure

## Post-Deployment

### Verification
- [ ] Application is accessible at production URL
- [ ] HTTPS is working correctly
- [ ] SSL certificate is valid
- [ ] User registration works
- [ ] User login works
- [ ] Booking creation works
- [ ] Dashboard is accessible
- [ ] API endpoints respond correctly
- [ ] Database connections are stable
- [ ] Redis caching is working (if enabled)
- [ ] Email sending works (if configured)

### Testing
- [ ] Test user flows end-to-end
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Test error handling
- [ ] Check console for errors
- [ ] Verify security headers
- [ ] Test rate limiting
- [ ] Load test the application

### Documentation
- [ ] Update README with production URL
- [ ] Document deployment process
- [ ] Document rollback procedure
- [ ] Create runbook for common issues
- [ ] Document monitoring setup

### Team Preparation
- [ ] Share admin credentials securely
- [ ] Train team on dashboard usage
- [ ] Setup support channels
- [ ] Create incident response plan

## Monitoring Checklist

### Daily
- [ ] Check error logs
- [ ] Monitor uptime
- [ ] Check database performance
- [ ] Review API response times

### Weekly
- [ ] Review backup logs
- [ ] Check disk space
- [ ] Monitor memory usage
- [ ] Review security logs
- [ ] Update dependencies (security patches)

### Monthly
- [ ] Review and optimize database indexes
- [ ] Analyze application performance
- [ ] Review user feedback
- [ ] Update documentation
- [ ] Security audit

## Rollback Plan

If deployment fails:

1. **Immediate Actions**
   ```bash
   # Stop current application
   pm2 stop nextchapter
   
   # Switch to previous version
   git checkout <previous-commit>
   
   # Reinstall dependencies
   npm install
   
   # Restart application
   pm2 restart nextchapter
   ```

2. **Database Rollback**
   ```bash
   # Restore from backup
   mongorestore --uri="mongodb://..." /backup/previous
   ```

3. **Notify Team**
   - Alert development team
   - Update status page
   - Communicate with stakeholders

## Emergency Contacts

- **Technical Lead**: [Contact Info]
- **DevOps**: [Contact Info]
- **Database Admin**: [Contact Info]
- **Hosting Provider Support**: [Contact Info]

## Performance Benchmarks

Target metrics:
- [ ] Page load time < 2 seconds
- [ ] API response time < 200ms
- [ ] Uptime > 99.9%
- [ ] Error rate < 0.1%

## Security Scan

Before going live:
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Scan with OWASP ZAP or similar
- [ ] Check SSL configuration: https://www.ssllabs.com/ssltest/
- [ ] Verify security headers: https://securityheaders.com/
- [ ] Penetration testing (recommended)

## Legal & Compliance

- [ ] Privacy policy is up to date
- [ ] Terms of service are published
- [ ] GDPR compliance (if applicable)
- [ ] Cookie consent banner (if required)
- [ ] Data retention policy is documented

## Launch Announcement

- [ ] Prepare launch announcement
- [ ] Update social media
- [ ] Email existing customers
- [ ] Update marketing materials
- [ ] Press release (if applicable)

---

**Deployment Date**: _______________  
**Deployed By**: _______________  
**Version**: _______________  
**Sign-off**: _______________
