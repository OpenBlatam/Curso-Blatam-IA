import { NewsletterFormData } from '../types/forms';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Helper function to handle API calls
const handleApiCall = async (endpoint: string, data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return {
      ok: response.ok,
      data: await response.json(),
    };
  } catch (error) {
    console.error('API error:', error);
    return {
      ok: false,
      data: null,
    };
  }
};

export const api = {
  newsletter: {
    submit: (data: NewsletterFormData) => handleApiCall('/api/newsletter', data),
  },
  projectGrants: {
    submit: (data: any) => handleApiCall('/api/project-grants', data),
  },
  officeHours: {
    submit: (data: any) => handleApiCall('/api/office-hours', data),
  },
  smallGrants: {
    submit: (data: any) => handleApiCall('/api/small-grants', data),
  },
  granteeFinance: {
    submit: (data: any) => handleApiCall('/api/grantee-finance', data),
  },
  academicGrants: {
    submit: (data: any) => handleApiCall('/api/academic-grants', data),
  },
  devconGrants: {
    submit: (data: any) => handleApiCall('/api/devcon-grants', data),
  },
}; 