package csit321.cit.movix.service;

import csit321.cit.movix.config.SupabaseConfig;
import csit321.cit.movix.dto.AuthRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AuthService {

    private final RestTemplate restTemplate;
    private final SupabaseConfig supabaseConfig;

    @Autowired
    public AuthService(RestTemplate restTemplate, SupabaseConfig supabaseConfig) {
        this.restTemplate = restTemplate;
        this.supabaseConfig = supabaseConfig;
    }

    /**
     * Calls the Supabase /signup endpoint to register a new user.
     * @param request The AuthRequest containing email and password.
     * @return ResponseEntity from the Supabase API.
     */
    public ResponseEntity<String> registerUser(AuthRequest request) {
        // 1. Set up the target URL for Supabase Auth API
        String url = supabaseConfig.getSupabaseAuthUrl() + "/signup";
        
        // 2. Set up headers required by Supabase (Anon Key is crucial)
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(supabaseConfig.getSupabaseAnonKey()); 
        // Note: Supabase often expects the Anon Key in the 'apikey' header, 
        // but for signup/signin, it typically needs the JWT/Bearer auth scheme, 
        // which we fake here by putting the Anon Key in the Bearer field, or simply as 'apikey'.
        // For simplicity, we often put the public key in the 'apikey' header for these endpoints.
        // Let's use the 'apikey' header as it's more reliable for initial public calls.
        headers.set("apikey", supabaseConfig.getSupabaseAnonKey()); 

        // 3. Package the request body and headers
        HttpEntity<AuthRequest> entity = new HttpEntity<>(request, headers);

        try {
            // 4. Send the POST request to Supabase
            return restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
        } catch (Exception e) {
            // Handle connection errors or bad requests gracefully
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}