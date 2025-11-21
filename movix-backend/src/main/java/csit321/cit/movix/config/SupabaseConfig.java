package csit321.cit.movix.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@Configuration
public class SupabaseConfig {

    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.anon-key}")
    private String supabaseAnonKey;

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    public String getSupabaseUrl() {
        return supabaseUrl;
    }

    public String getSupabaseAuthUrl() {
        return supabaseUrl + "/auth/v1";
    }

    public String getSupabaseAnonKey() {
        return supabaseAnonKey;
    }
}