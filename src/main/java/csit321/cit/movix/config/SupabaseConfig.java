package csit321.cit.movix.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate; // Use RestTemplate for simplicity

@Configuration
public class SupabaseConfig {

    // Inject values from application.properties
    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.anon-key}")
    private String supabaseAnonKey;

    // We can use a simple RestTemplate bean for synchronous HTTP calls to Supabase
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    // Getter for the base URL
    public String getSupabaseUrl() {
        return supabaseUrl;
    }

    // Getter for the Auth URL (used for sign-in/sign-up)
    public String getSupabaseAuthUrl() {
        // Supabase Auth API path is always /auth/v1/
        return supabaseUrl + "/auth/v1";
    }

    // Getter for the Anon Key (used as the Authorization header)
    public String getSupabaseAnonKey() {
        return supabaseAnonKey;
    }
}