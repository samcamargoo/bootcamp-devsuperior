package com.devsam.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsam.vendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
