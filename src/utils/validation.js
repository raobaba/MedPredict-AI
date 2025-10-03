// Form validation utilities
export const validators = {
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return null;
  },

  password: (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    if (value.length > 128) return "Password must be less than 128 characters";
    return null;
  },

  name: (value) => {
    if (!value) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    if (value.length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return "Name can only contain letters, spaces, hyphens, and apostrophes";
    return null;
  },

  phone: (value) => {
    if (!value) return null; // Optional field
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""))) {
      return "Please enter a valid phone number";
    }
    return null;
  },

  required: (value, fieldName = "This field") => {
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return `${fieldName} is required`;
    }
    return null;
  },

  minLength: (value, min, fieldName = "This field") => {
    if (value && value.length < min) {
      return `${fieldName} must be at least ${min} characters`;
    }
    return null;
  },

  maxLength: (value, max, fieldName = "This field") => {
    if (value && value.length > max) {
      return `${fieldName} must be less than ${max} characters`;
    }
    return null;
  },

  numeric: (value, fieldName = "This field") => {
    if (value && isNaN(Number(value))) {
      return `${fieldName} must be a number`;
    }
    return null;
  },

  positiveNumber: (value, fieldName = "This field") => {
    if (value && (isNaN(Number(value)) || Number(value) <= 0)) {
      return `${fieldName} must be a positive number`;
    }
    return null;
  },

  bloodPressure: (systolic, diastolic) => {
    const sys = Number(systolic);
    const dia = Number(diastolic);
    
    if (isNaN(sys) || isNaN(dia)) {
      return "Blood pressure values must be numbers";
    }
    
    if (sys < 50 || sys > 300) {
      return "Systolic pressure must be between 50 and 300";
    }
    
    if (dia < 30 || dia > 200) {
      return "Diastolic pressure must be between 30 and 200";
    }
    
    if (sys <= dia) {
      return "Systolic pressure must be higher than diastolic pressure";
    }
    
    return null;
  },

  heartRate: (value) => {
    const hr = Number(value);
    if (isNaN(hr)) return "Heart rate must be a number";
    if (hr < 30 || hr > 220) return "Heart rate must be between 30 and 220 bpm";
    return null;
  },

  glucose: (value) => {
    const glucose = Number(value);
    if (isNaN(glucose)) return "Glucose level must be a number";
    if (glucose < 20 || glucose > 600) return "Glucose level must be between 20 and 600 mg/dL";
    return null;
  }
};

// Sanitize input to prevent XSS
export function sanitizeInput(input) {
  if (typeof input !== "string") return input;
  
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
}

// Validate form data
export function validateForm(data, rules) {
  const errors = {};
  
  for (const [field, validations] of Object.entries(rules)) {
    const value = data[field];
    
    for (const validation of validations) {
      const error = validation(value, data);
      if (error) {
        errors[field] = error;
        break; // Stop at first error for this field
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Debounce function for real-time validation
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
