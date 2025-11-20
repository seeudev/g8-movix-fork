package csit321.cit.movix.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import javax.crypto.SecretKey;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    // IMPORTANT: Store this value in application.properties!
    @Value("${movix.app.jwtSecret}")
    private String jwtSecret;

    // IMPORTANT: Store this value in application.properties!
    @Value("${movix.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {
        // We will adapt our User model to implement UserDetails in the next step
        UserDetails userPrincipal = (UserDetails) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getUsername())) // Subject is the username/email
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key(), SignatureAlgorithm.HS512)
                .compact();
    }

  private SecretKey key() {
    return Keys.hmacShaKeyFor(jwtSecret.getBytes()); 
}
    public boolean validateJwtToken(String authToken) {
    try {
        // FIX: Use Jwts.parser() and .verifyWith()
        Jwts.parser()
            .verifyWith(key()) // Use verifyWith() with the Key object
            .build()
            .parseSignedClaims(authToken); // Use parseSignedClaims for 0.12+
        return true;
    } catch (SignatureException e) {
        System.err.println("Invalid JWT signature: " + e.getMessage());
        // ... (rest of the catches are the same)
    } 
    // ... rest of the catches (MalformedJwtException, ExpiredJwtException, etc.)
    return false;
}

public String getEmailFromJwtToken(String token) {
    // FIX: Use Jwts.parser() and .verifyWith()
    return Jwts.parser()
        .verifyWith(key())
        .build()
        .parseSignedClaims(token) // Use parseSignedClaims
        .getPayload()
        .getSubject();
    }
}