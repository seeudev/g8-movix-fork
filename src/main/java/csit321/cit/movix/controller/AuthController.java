package csit321.cit.movix.controller;

import csit321.cit.movix.dto.AuthRequest;
import csit321.cit.movix.service.AuthService;
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
    public ResponseEntity<String> register(@RequestBody AuthRequest request) {
        return authService.registerUser(request);
    }
    
    // TODO: Add the /login endpoint here, calling the service method
}