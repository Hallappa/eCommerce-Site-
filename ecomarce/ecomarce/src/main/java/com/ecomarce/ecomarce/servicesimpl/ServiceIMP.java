package com.ecomarce.ecomarce.servicesimpl;

import com.ecomarce.ecomarce.Repository.Repo;
import com.ecomarce.ecomarce.doa.Product;
import com.ecomarce.ecomarce.services.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ServiceIMP implements Services {
    @Autowired
    private Repo repo;
    @Override
    public Product createUser(Product product) {
        return repo.save(product);
    }

    @Override
    public List<Product> getAllProduct() {
        return repo.findAll();
    }

    @Override
    public Optional<Product> getbyID(String id) {
        return repo.findById(id);
    }

    @Override
    public void deletebyID(String id) {
        repo.deleteById(id);

    }
}
