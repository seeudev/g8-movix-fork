package csit321.cit.movix;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/hello")
    public String helloWorld() {
        return "Movix Backend is Running!";
    }
}