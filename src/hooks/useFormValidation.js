import { useState, useCallback } from 'react';

export const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name, value) => {
    let error = '';
    
    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'age':
        if (!value) {
          error = 'Age is required';
        } else if (isNaN(value) || value < 0) {
          error = 'Age must be a valid number';
        }
        break;
      default:
        if (!value) {
          error = `${name} is required`;
        }
    }

    return error;
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  return { values, errors, isSubmitting, setIsSubmitting, handleChange };
}; 