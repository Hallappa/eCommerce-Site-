package com.ecomarce.ecomarce.controller.Controller;

import com.ecomarce.ecomarce.doa.Product;
import com.ecomarce.ecomarce.servicesimpl.ServiceIMP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class Controller {
    @Autowired
    private ServiceIMP serviceIMP;
    @PostMapping("/create")
    ResponseEntity<Product> createProduct(@RequestBody Product product)
    {

        return ResponseEntity.ok().body(serviceIMP.createUser(product));
    }
    @GetMapping("/get")
    ResponseEntity<List<Product>> getALl()
    {
        return ResponseEntity.ok().body(serviceIMP.getAllProduct());
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable("id") String id) {
        Optional<Product> product = serviceIMP.getbyID(id);
        return ResponseEntity.ok().body(product);
    }
}
