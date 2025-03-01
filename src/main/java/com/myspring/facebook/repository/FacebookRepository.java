package com.myspring.facebook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myspring.facebook.model.Facebook;

@Repository
public interface FacebookRepository extends JpaRepository<Facebook, String> {

}
