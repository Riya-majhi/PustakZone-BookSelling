package com.bookService.Bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OrderBook {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int oId;
	private int bId;
	private String bTitle;
	private String bPrice;
	private String bGenre;
	private String uId;
	private String uName;
	private String uAddress;
	private long uPhone;
	
	public OrderBook(int oId, int bId, String bTitle, String bPrice, String bGenre, String uId, String uName,
			String uAddress, long uPhone) {
		super();
		this.oId = oId;
		this.bId = bId;
		this.bTitle = bTitle;
		this.bPrice = bPrice;
		this.bGenre = bGenre;
		this.uId = uId;
		this.uName = uName;
		this.uAddress = uAddress;
		this.uPhone = uPhone;
	}
	public OrderBook() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "OrderBook [oId=" + oId + ", bId=" + bId + ", bTitle=" + bTitle + ", bPrice=" + bPrice + ", bGenre="
				+ bGenre + ", uId=" + uId + ", uName=" + uName + ", uAddress=" + uAddress + ", uPhone=" + uPhone + "]";
	}
	public int getoId() {
		return oId;
	}
	public void setoId(int oId) {
		this.oId = oId;
	}
	public int getbId() {
		return bId;
	}
	public void setbId(int bId) {
		this.bId = bId;
	}
	public String getbTitle() {
		return bTitle;
	}
	public void setbTitle(String bTitle) {
		this.bTitle = bTitle;
	}
	public String getbPrice() {
		return bPrice;
	}
	public void setbPrice(String bPrice) {
		this.bPrice = bPrice;
	}
	public String getbGenre() {
		return bGenre;
	}
	public void setbGenre(String bGenre) {
		this.bGenre = bGenre;
	}
	public String getuId() {
		return uId;
	}
	public void setuId(String uId) {
		this.uId = uId;
	}
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
	public String getuAddress() {
		return uAddress;
	}
	public void setuAddress(String uAddress) {
		this.uAddress = uAddress;
	}
	public long getuPhone() {
		return uPhone;
	}
	public void setuPhone(long uPhone) {
		this.uPhone = uPhone;
	}

}
