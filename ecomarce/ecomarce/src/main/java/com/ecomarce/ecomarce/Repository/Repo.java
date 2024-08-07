package com.ecomarce.ecomarce.Repository;

import com.ecomarce.ecomarce.doa.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Product,String> {
}
