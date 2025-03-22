import { ChangeEvent, useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const useContactForm = (
  googleFormUrl: string,
  fieldIds: { [key: string]: string }
) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [formErrorMessage, setFormErrorMessage] = useState<string>('');

  const validateForm = () => {
    const newErrors: FormErrors = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
    
    const nameRegex = /^[A-Za-z\s'-]+$/;

    if (formData.firstName.length < 2 || formData.firstName.length > 15) {
      newErrors.firstName = 'First name must be 2-15 characters*';
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'First name can only contain letters*';
    }

    if (formData.lastName.length < 2 || formData.lastName.length > 15) {
      newErrors.lastName = 'Last name must be 2-15 characters*';
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'Last name can only contain letters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message = 'Message must be between 10-500 characters*';
    }

    setErrors(newErrors);
    
    const errorMessages = Object.values(newErrors).filter(error => error !== '');
    if (errorMessages.length > 0) {
      setFormErrorMessage(errorMessages[0]);
    } else {
      setFormErrorMessage('');
    }

    return errorMessages.length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormErrorMessage('');
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append(fieldIds.firstName, formData.firstName);
    submissionData.append(fieldIds.lastName, formData.lastName);
    submissionData.append(fieldIds.email, formData.email);
    submissionData.append(fieldIds.message, formData.message);

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: submissionData,
        mode: 'no-cors',
      });
      console.log('Form submitted successfully:', response);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrorMessage('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitted,
    isSubmitting,
    errors,
    formErrorMessage,
    handleChange,
    handleSubmit,
  };
};