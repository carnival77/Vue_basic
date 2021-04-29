package com.minibank.customer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.minibank.customer.domain.entity.Customer;
import com.minibank.customer.repository.CustomerRepository;


@Service("customerService")
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerRepository customerRepository;
	
	@Override
	@Transactional(rollbackFor = Exception.class)
	public int createCustomer(Customer customer) throws Exception {
		String cstmId = customer.getCstmId();
		int result = 0;
		if(existsCustomer(cstmId)) {
			throw new Exception("아이디 중복");
		}else {
			result = customerRepository.insertCustomer(customer);
		}
		return result;
	}

	@Override
	public Customer retrieveCustomer(String cstmId) throws Exception {
		Customer customer = null;
		customer = customerRepository.selectCustomer(cstmId);
		return customer;
	}

	@Override
	public Boolean existsCustomer(String cstmId) throws Exception {
		return customerRepository.existsCustomer(cstmId);
	}

	@Override
	public List<Customer> retrieveAllCustomer() throws Exception {
		return customerRepository.selectAllCustomer();
	}

	@Override
	public int deleteCustomer(String cstmId) throws Exception {
		return customerRepository.deleteCustomer(cstmId);
	}

	@Override
	public int updateCustomer(Customer customer) throws Exception {
		return customerRepository.updateCustomer(customer);
	}

}
