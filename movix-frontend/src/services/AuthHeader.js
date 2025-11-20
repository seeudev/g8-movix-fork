// src/services/AuthHeader.js

import { getToken } from './AuthService';

// This function checks if a token exists in localStorage and formats it
// for the Authorization header: { Authorization: 'Bearer <token>' }
export default function authHeader() {
    const token = getToken();

    if (token) {
        return { 
            // Standard JWT authorization format
            Authorization: 'Bearer ' + token,
            // Include content-type for body data
            'Content-Type': 'application/json' 
        };
    } else {
        // Return empty object if no token is found
        return {};
    }
}