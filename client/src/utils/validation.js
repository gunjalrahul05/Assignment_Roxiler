
export const validateName = (name) => {
  if (!name) return 'Name is required';
  if (name.length < 20) return 'Name must be at least 20 characters';
  if (name.length > 60) return 'Name must be at most 60 characters';
  return '';
};

export const validateAddress = (address) => {
  if (!address) return 'Address is required';
  if (address.length > 400) return 'Address must be at most 400 characters';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (password.length > 16) return 'Password must be at most 16 characters';
  
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
  
  if (!/[!@#$%^&*]/.test(password)) return 'Password must contain at least one special character (!@#$%^&*)';
  
  return '';
};

export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  
  return '';
};

export const validateRating = (rating) => {
  if (!rating) return 'Rating is required';
  
  const ratingValue = parseInt(rating);
  if (isNaN(ratingValue)) return 'Rating must be a number';
  if (ratingValue < 1 || ratingValue > 5) return 'Rating must be between 1 and 5';
  
  return '';
};
