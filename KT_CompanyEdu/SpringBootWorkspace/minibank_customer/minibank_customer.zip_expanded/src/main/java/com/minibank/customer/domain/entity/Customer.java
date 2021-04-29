package com.minibank.customer.domain.entity;

public class Customer {

	private String cstmId;
	private String cstmNm;
	private String cstmAge;
	private String cstmGnd;
	private String cstmPn;
	private String cstmAdr;
	
	public Customer() {}
	
	public Customer(String cstmId, String cstmNm, String cstmAge, String cstmGnd, String cstmPn, String cstmAdr) {
		super();
		this.cstmId = cstmId;
		this.cstmNm = cstmNm;
		this.cstmAge = cstmAge;
		this.cstmGnd = cstmGnd;
		this.cstmPn = cstmPn;
		this.cstmAdr = cstmAdr;
	}
	public String getCstmId() {
		return cstmId;
	}
	public void setCstmId(String cstmId) {
		this.cstmId = cstmId;
	}
	public String getCstmNm() {
		return cstmNm;
	}
	public void setCstmNm(String cstmNm) {
		this.cstmNm = cstmNm;
	}
	public String getCstmAge() {
		return cstmAge;
	}
	public void setCstmAge(String cstmAge) {
		this.cstmAge = cstmAge;
	}
	public String getCstmGnd() {
		return cstmGnd;
	}
	public void setCstmGnd(String cstmGnd) {
		this.cstmGnd = cstmGnd;
	}
	public String getCstmPn() {
		return cstmPn;
	}
	public void setCstmPn(String cstmPn) {
		this.cstmPn = cstmPn;
	}
	public String getCstmAdr() {
		return cstmAdr;
	}
	public void setCstmAdr(String cstmAdr) {
		this.cstmAdr = cstmAdr;
	}
	@Override
	public String toString() {
		return "Customer [cstmId=" + cstmId + ", cstmNm=" + cstmNm + ", cstmAge=" + cstmAge + ", cstmGnd=" + cstmGnd
				+ ", cstmPn=" + cstmPn + ", cstmAdr=" + cstmAdr + "]";
	}

}
