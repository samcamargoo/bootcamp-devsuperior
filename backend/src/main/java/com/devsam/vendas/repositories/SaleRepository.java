package com.devsam.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsam.vendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
