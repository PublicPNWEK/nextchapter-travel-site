/**
 * Global authentication and utilities for Next Chapter Travel
 */

(function() {
  'use strict';

  // API Configuration
  window.NCT = {
    API_BASE: '/api',
    authToken: localStorage.getItem('authToken'),
    currentUser: null,

    // API Request Helper
    async apiRequest(endpoint, options = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(this.authToken && { 'Authorization': `Bearer ${this.authToken}` }),
        ...options.headers,
      };

      try {
        const response = await fetch(`${this.API_BASE}${endpoint}`, {
          ...options,
          headers,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Request failed');
        }

        return data;
      } catch (error) {
        console.error('API Error:', error);
        throw error;
      }
    },

    // Check if user is authenticated
    async checkAuth() {
      if (!this.authToken) {
        return null;
      }

      try {
        const data = await this.apiRequest('/auth/me');
        this.currentUser = data.user;
        return this.currentUser;
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('authToken');
        this.authToken = null;
        this.currentUser = null;
        return null;
      }
    },

    // Logout
    logout() {
      localStorage.removeItem('authToken');
      this.authToken = null;
      this.currentUser = null;
      window.location.href = '/login.html';
    },

    // Add authentication UI to page
    async addAuthUI() {
      const user = await this.checkAuth();
      
      // Create auth container if it doesn't exist
      let authContainer = document.getElementById('nct-auth-ui');
      if (!authContainer) {
        authContainer = document.createElement('div');
        authContainer.id = 'nct-auth-ui';
        authContainer.setAttribute('role', 'navigation');
        authContainer.setAttribute('aria-label', 'User account navigation');
        authContainer.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          padding: 10px 20px;
          border-radius: 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 10px;
          align-items: center;
        `;
        document.body.appendChild(authContainer);
      }

      if (user) {
        authContainer.innerHTML = `
          <span style="color: #2c3e50; font-size: 0.9rem;" aria-label="Current user">
            👤 ${user.firstName}
          </span>
          <a href="/account.html" 
             style="color: #c5a880; text-decoration: none; font-weight: 600;"
             aria-label="Go to my account">
            My Account
          </a>
          ${user.role === 'agent' || user.role === 'admin' ? 
            '<a href="/dashboard.html" style="color: #c5a880; text-decoration: none; font-weight: 600;" aria-label="Go to agent dashboard">Dashboard</a>' : 
            ''}
          <button onclick="NCT.logout()" 
                  style="background: #e74c3c; color: white; border: none; padding: 5px 15px; border-radius: 15px; cursor: pointer; font-size: 0.9rem;"
                  aria-label="Logout from account">
            Logout
          </button>
        `;
      } else {
        authContainer.innerHTML = `
          <a href="/login.html" 
             style="color: #c5a880; text-decoration: none; font-weight: 600;"
             aria-label="Login to your account">
            Login
          </a>
          <a href="/register.html" 
             style="background: #c5a880; color: white; padding: 8px 20px; border-radius: 20px; text-decoration: none; font-weight: 600;"
             aria-label="Create a new account">
            Sign Up
          </a>
        `;
      }
    }
  };

  // Auto-initialize auth UI on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      NCT.addAuthUI();
    });
  } else {
    NCT.addAuthUI();
  }

})();
