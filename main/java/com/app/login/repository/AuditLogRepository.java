package com.app.login.repository;

import com.app.login.entity.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
    
    List<AuditLog> findByUsername(String username);
    
    List<AuditLog> findByEventType(AuditLog.EventType eventType);
    
    List<AuditLog> findByEventTimeBetween(LocalDateTime start, LocalDateTime end);
    
    List<AuditLog> findByUsernameAndEventType(String username, AuditLog.EventType eventType);
}
