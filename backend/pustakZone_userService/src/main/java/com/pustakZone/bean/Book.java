package com.pustakZone.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
//	ISBN Number
	private int bId;
	private String bTitle;
	private String  bHPrice;
	private String bEPrice;
	private String bAuthor;
	private String bGenre;
	private String bSummary;
	private String bImage;
	private String bPublisher;
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
	public String getbHPrice() {
		return bHPrice;
	}
	public void setbHPrice(String bHPrice) {
		this.bHPrice = bHPrice;
	}
	public String getbEPrice() {
		return bEPrice;
	}
	public void setbEPrice(String bEPrice) {
		this.bEPrice = bEPrice;
	}
	public String getbAuthor() {
		return bAuthor;
	}
	public void setbAuthor(String bAuthor) {
		this.bAuthor = bAuthor;
	}
	public String getbGenre() {
		return bGenre;
	}
	public void setbGenre(String bGenre) {
		this.bGenre = bGenre;
	}
	public String getbSummary() {
		return bSummary;
	}
	public void setbSummary(String bSummary) {
		this.bSummary = bSummary;
	}
	public String getbImage() {
		return bImage;
	}
	public void setbImage(String bImage) {
		this.bImage = bImage;
	}
	public String getbPublisher() {
		return bPublisher;
	}
	public void setbPublisher(String bPublisher) {
		this.bPublisher = bPublisher;
	}
	@Override
	public String toString() {
		return "Book [bId=" + bId + ", bTitle=" + bTitle + ", bHPrice=" + bHPrice + ", bEPrice=" + bEPrice
				+ ", bAuthor=" + bAuthor + ", bGenre=" + bGenre + ", bSummary=" + bSummary + ", bImage=" + bImage
				+ ", bPublisher=" + bPublisher + "]";
	}
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(int bId, String bTitle, String bHPrice, String bEPrice, String bAuthor, String bGenre, String bSummary,
			String bImage, String bPublisher) {
		super();
		this.bId = bId;
		this.bTitle = bTitle;
		this.bHPrice = bHPrice;
		this.bEPrice = bEPrice;
		this.bAuthor = bAuthor;
		this.bGenre = bGenre;
		this.bSummary = bSummary;
		this.bImage = bImage;
		this.bPublisher = bPublisher;
	}

	}
