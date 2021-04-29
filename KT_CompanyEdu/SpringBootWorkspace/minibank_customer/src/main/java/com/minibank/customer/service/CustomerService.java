package com.minibank.customer.service;

import java.util.List;

import com.minibank.customer.domain.entity.Customer;

public interface CustomerService {

	public int createCustomer(Customer customer) throws Exception;
	public Customer retrieveCustomer(String cstmId) throws Exception;
	public List<Customer> retrieveAllCustomer() throws Exception;
	public int deleteCustomer(String cstmId) throws Exception;
	public int updateCustomer(Customer customer) throws Exception;
	public Boolean existsCustomer(String cstmId) throws Exception;
}
