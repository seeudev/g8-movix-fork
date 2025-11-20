package csit321.cit.movix.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
    
    // ⭐ CRITICAL: Remove any @PreAuthorize or @Secured annotations here!
    @GetMapping("/user")
    public String userAccess() {
        // This message should now be returned successfully when you access /api/test/user
        return "SUCCESS! Message from Backend: Welcome to the Movix User Dashboard.";
    }

    // You can also uncomment these two for testing if you have them:
    /*
    @GetMapping("/admin")
    public String adminAccess() {
        return "Admin Board.";
    }

    @GetMapping("/mod")
    public String moderatorAccess() {
        return "Moderator Board.";
    }
    */
}