package com.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.automation.MyDrivers;

import utils.Timer;

public class FlipkartHomePage extends MyDrivers{

	static WebDriver driver1;

	@FindBy(xpath= "//a[text()='Signup']")
	public static WebElement btn_Signup;

	@FindBy(xpath= "//img[@title='Flipkart']")
	public static WebElement logo_Flipkart;

	@FindBy(xpath= "//span[text()='Electronics']")
	public static WebElement btn_Electronics;

	@FindBy(xpath= "//a[text()='Log In']")
	public static WebElement btn_SignIn;
	
	@FindBy(xpath= "//span[text()='Pen']")
	public static WebElement btn_PenDrives;

	/*public FlipkartHomePage()*/
	static
	{
		/*FlipkartHomePage.driver1=driver;
		PageFactory.initElements(driver1, FlipkartHomePage.class);*/
	}

	public static void isSignInButtonDisplayed() {
		Timer.waitForElementToBePresent(driver, 30, btn_SignIn);
		Assert.assertTrue(btn_SignIn.isDisplayed());
	}

	public static void ishomepageDisplayed() {
		Timer.waitForElementToBePresent(driver, 60, btn_Signup);
		System.out.println("INSIDE POM");

		System.out.println(btn_Signup.isDisplayed());
		Assert.assertTrue(btn_Signup.isDisplayed());
		Assert.assertTrue(btn_Signup.isDisplayed()); 
		Assert.assertTrue(logo_Flipkart.isDisplayed());
		System.out.println("HOME PAGE IS DISPLAYED");
	}

	public static void isElectronicsLinkDispalyed() {
		Timer.waitForElementToBePresent(driver, 30, btn_Electronics);
		btn_Electronics.isDisplayed();
	}
	
	public static void isPenDrivesDispalyed() {
		System.out.println("INSIDE PEN DRIVES");
		Timer.waitForElementToBePresent(driver, 30, btn_PenDrives);
		btn_Electronics.isDisplayed();
	}

}
