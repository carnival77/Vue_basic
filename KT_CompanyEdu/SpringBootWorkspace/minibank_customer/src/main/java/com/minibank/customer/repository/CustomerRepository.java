package com.minibank.customer.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.minibank.customer.domain.entity.Customer;

@Mapper
public interface CustomerRepository {

	int insertCustomer(Customer customer) throws Exception;
	int deleteCustomer(String cstmId) throws Exception;
	int updateCustomer(Customer customer) throws Exception;
	Customer selectCustomer(String cstmId) throws Exception;
	List<Customer> selectAllCustomer() throws Exception;
	Boolean existsCustomer(String cstmId) throws Exception;
	
}
