// Security utilities for input sanitization and validation

// HTML sanitization to prevent XSS
export function sanitizeHTML(input) {
  if (typeof input !== "string") return input;
  
  const allowedTags = ["b", "i", "em", "strong", "p", "br"];
  const allowedAttributes = ["class", "id"];
  
  // Remove all HTML tags except allowed ones
  let sanitized = input.replace(/<(?![\/]?(?:b|i|em|strong|p|br)\b)[^>]*>/gi, "");
  
  // Remove dangerous attributes
  sanitized = sanitized.replace(/\s(on\w+|javascript:|data:|vbscript:)[^>\s]*/gi, "");
  
  return sanitized;
}

// SQL injection prevention (for display purposes)
export function sanitizeForDisplay(input) {
  if (typeof input !== "string") return input;
  
  return input
    .replace(/[<>]/g, "") // Remove potential HTML
    .replace(/javascript:/gi, "") // Remove javascript protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .replace(/['"]/g, "") // Remove quotes that could break SQL
    .trim();
}

// Rate limiting utility
export class RateLimiter {
  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  isAllowed(identifier) {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    // Add current request
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }

  getRemainingRequests(identifier) {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];
    const validRequests = userRequests.filter(time => now - time < this.windowMs);
    
    return Math.max(0, this.maxRequests - validRequests.length);
  }
}

// Content Security Policy headers
export const cspHeaders = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Note: unsafe-eval for development only
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join("; ")
};

// Security headers
export const securityHeaders = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  ...cspHeaders
};

// Input validation for different data types
export const inputValidators = {
  // Email validation with additional security checks
  email: (value) => {
    if (!value) return { valid: false, error: "Email is required" };
    
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return { valid: false, error: "Invalid email format" };
    }
    
    // Check for suspicious patterns
    if (value.includes("..") || value.includes("--")) {
      return { valid: false, error: "Invalid email format" };
    }
    
    // Length check
    if (value.length > 254) {
      return { valid: false, error: "Email too long" };
    }
    
    return { valid: true };
  },

  // Password validation with security requirements
  password: (value) => {
    if (!value) return { valid: false, error: "Password is required" };
    
    if (value.length < 8) {
      return { valid: false, error: "Password must be at least 8 characters" };
    }
    
    if (value.length > 128) {
      return { valid: false, error: "Password too long" };
    }
    
    // Check for common weak passwords
    const commonPasswords = ["password", "123456", "admin", "qwerty"];
    if (commonPasswords.includes(value.toLowerCase())) {
      return { valid: false, error: "Password is too common" };
    }
    
    return { valid: true };
  },

  // Name validation
  name: (value) => {
    if (!value) return { valid: false, error: "Name is required" };
    
    if (value.length < 2) {
      return { valid: false, error: "Name must be at least 2 characters" };
    }
    
    if (value.length > 50) {
      return { valid: false, error: "Name too long" };
    }
    
    // Only allow letters, spaces, hyphens, and apostrophes
    if (!/^[a-zA-Z\s'-]+$/.test(value)) {
      return { valid: false, error: "Name contains invalid characters" };
    }
    
    return { valid: true };
  }
};

// CSRF token generation (simplified for demo)
export function generateCSRFToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Validate CSRF token
export function validateCSRFToken(token, sessionToken) {
  return token && sessionToken && token === sessionToken;
}

// Secure random string generation
export function generateSecureRandom(length = 32) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// File upload validation
export function validateFileUpload(file, options = {}) {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.pdf']
  } = options;
  
  if (!file) {
    return { valid: false, error: "No file provided" };
  }
  
  if (file.size > maxSize) {
    return { valid: false, error: "File too large" };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: "File type not allowed" };
  }
  
  const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
  if (!allowedExtensions.includes(extension)) {
    return { valid: false, error: "File extension not allowed" };
  }
  
  return { valid: true };
}
