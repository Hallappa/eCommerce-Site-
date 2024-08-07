package com.ecomarce.ecomarce.services;

import com.ecomarce.ecomarce.doa.Product;

import java.util.List;
import java.util.Optional;

public interface Services {
    Product createUser(Product product);
    List<Product> getAllProduct();
    Optional<Product> getbyID(String id);
    void  deletebyID(String id);

}
