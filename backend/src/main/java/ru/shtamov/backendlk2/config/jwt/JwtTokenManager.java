package ru.shtamov.backendlk2.config.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Collection;
import java.util.Date;

@Component
public class JwtTokenManager {

    private static final Logger log = LoggerFactory.getLogger(JwtTokenManager.class);
    private final Key key;
    private final long expirationTime;


    public JwtTokenManager(@Value("${jwt.key}") String key, @Value("${jwt.expiration-date}")  long expirationTime) {
        this.key = Keys.hmacShaKeyFor(key.getBytes());
        this.expirationTime = expirationTime;
    }

    public String generateToken(String login, Collection<? extends GrantedAuthority> authorities){
        String role = authorities.stream()
                .findFirst()
                .map(GrantedAuthority::getAuthority)
                .orElse("USER");

        return Jwts
                .builder()
                .subject(login)
                .signWith(key)
                .claim("role", role)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationTime))
                .compact();
    }

    public String getLoginFromToken(String jwt){
        return Jwts
                .parser()
                .verifyWith((SecretKey) key)
                .build()
                .parseSignedClaims(jwt)
                .getPayload()
                .getSubject();
    }
}