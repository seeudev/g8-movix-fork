package csit321.cit.movix.controller;

import csit321.cit.movix.payload.request.LoginRequest; // Assuming you have a LoginRequest payload
import csit321.cit.movix.payload.request.RegisterRequest; // Assuming you renamed AuthRequest to RegisterRequest
import csit321.cit.movix.payload.response.JwtResponse; // Assuming you have a JwtResponse payload
import csit321.cit.movix.payload.response.MessageResponse; // Assuming you have a MessageResponse payload
import csit321.cit.movix.service.AuthService;

import jakarta.validation.Valid; // Required for input validation

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth") // Base URL for all Auth endpoints
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your React frontend (Vite default port)
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<MessageResponse> register(@Valid @RequestBody RegisterRequest request) {
        // Assuming your AuthService handles the logic, including setting enabled=true
        return authService.registerUser(request); 
    }
    
    // --- CRITICAL ADDITION: The /login endpoint ---
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest request) {
        return authService.authenticateUser(request);
    }
    // ---------------------------------------------
}