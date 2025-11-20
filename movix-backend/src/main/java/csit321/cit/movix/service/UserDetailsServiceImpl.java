package csit321.cit.movix.service;

import csit321.cit.movix.model.User;
import csit321.cit.movix.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// IMPORTANT: We no longer need SimpleGrantedAuthority or Collections imports here 
// because the logic is moved to the UserDetailsImpl.build() method.
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        
        // 1. Find the user by their email
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        // 2. CRITICAL FIX: Return your custom UserDetailsImpl object 
        //    by calling its static build method and passing the User entity.
        return UserDetailsImpl.build(user);
    }
}