package csit321.cit.movix.model;

// ----------------------------------------------------------------
// !!! CRITICAL FIX: CHANGE JAVAX TO JAKARTA !!!
import jakarta.persistence.*;
// ----------------------------------------------------------------

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
@Entity
@Table(name = "users") // Maps this class to a table named 'users' in the DB
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key, auto-incremented by the database

    @Column(unique = true, nullable = false)
    private String email; // Must be unique and cannot be null (required for login/register)

    @Column(nullable = false)
    private String password; // Will store the HASHED password

    // --- CRITICAL ADDITION/FIX: Enable user immediately ---
    @Column(nullable = false)
    private Boolean enabled = true; // NEW: User is active instantly upon registration
    // --------------------------------------------------------
    
    // Custom constructor for registration (without the ID)
    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.enabled = true; // Ensure the new user is enabled immediately
    }
}