package csit321.cit.movix;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

@SpringBootTest
// This tells Spring Boot to not try connecting to the actual database defined in application.properties
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE) 
class MovixApplicationTests {

    @Test
    void contextLoads() {
    }

}