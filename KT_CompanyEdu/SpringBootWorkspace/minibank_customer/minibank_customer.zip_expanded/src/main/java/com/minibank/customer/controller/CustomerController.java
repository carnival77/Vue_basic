package com.minibank.customer.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.minibank.customer.domain.entity.Customer;
import com.minibank.customer.service.CustomerService;

import io.swagger.annotations.ApiOperation;



@RestController
public class CustomerController {

	 @Resource(name="customerService")
	 private CustomerService customerService;
	 
	 @ApiOperation(value = "고객등록", httpMethod = "POST", notes = "고객등록")
	 @CrossOrigin
	 @RequestMapping(value = "/rest/v0.8", method=RequestMethod.POST)
	 public Integer createCustomer(@RequestBody Customer customer)throws Exception{
		 System.out.println(">>>>>>>>>>>>"+ customer);
		 return customerService.createCustomer(customer);
	 }
	 
	 @ApiOperation(value = "고객기본조회", httpMethod = "GET", notes = "고객기본조회")
	 @CrossOrigin
	 @RequestMapping(value = "/rest/v0.8/{cstmId}", method = RequestMethod.GET)
	 public Customer retrieveCustomer(@PathVariable String cstmId) throws Exception{
		 return customerService.retrieveCustomer(cstmId);
	 }
	 
	 @ApiOperation(value = "고객존재여부조회", httpMethod = "GET", notes = "고객존재여부조회")
	 @CrossOrigin
	 @RequestMapping(value = "/exist/rest/v0.8/{cstmId}", method=RequestMethod.GET)
	 public Boolean existsCustomer(@PathVariable String cstmId)throws Exception{
		 return customerService.existsCustomer(cstmId);
	 }
	 
	 @ApiOperation(value = "모든 고객기본조회", httpMethod = "GET", notes = "모든 고객기본조회")
	 @CrossOrigin
	 @RequestMapping(value = "/rest/v0.8/all", method = RequestMethod.GET)
	 public List<Customer> retrieveAllCustomer() throws Exception{
		 return customerService.retrieveAllCustomer();
	 }
	 
	 @ApiOperation(value = "고객삭제", httpMethod = "GET", notes = "고객삭제")
	 @CrossOrigin
	 @RequestMapping(value = "/del/v0.8/{cstmId}", method = RequestMethod.DELETE)
	 public int deleteCustomer(@PathVariable String cstmId) throws Exception{
		 return customerService.deleteCustomer(cstmId);
	 }
	 @ApiOperation(value = "고객수정", httpMethod = "PUT", notes = "고객수정")
	 @CrossOrigin
	 @RequestMapping(value = "/rest/v0.8", method = RequestMethod.PUT)
	 public int updateCustomer(@RequestBody Customer customer) throws Exception{
		 return customerService.updateCustomer(customer);
	 }
}
