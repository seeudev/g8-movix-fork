package csit321.cit.movix.dto;
import lombok.Data; 

@Data 
public class AuthRequest {
    private String email;
    private String password;
}