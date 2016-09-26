package com.cucumber.Selenium;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.StepDefinitions.Hooks;

import cucumber.api.DataTable;

public class SeleniumFunctions {/*
	
	WebDriver driver = Hooks.driver;
	public static WebDriverWait waitVar = new WebDriverWait(driver, 15);

	public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;
	waitVar = new WebDriverWait(driver, 15);

	public static String baseURL = "http://flipkart.com/";

	public void createDriver(String url) throws MalformedURLException,
	InterruptedException {


		System.setProperty("webdriver.chrome.driver", "C:\\Users\\saranshjain\\Desktop\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		driver.get(url);

		waitVar = new WebDriverWait(driver, 15);
	}

	public void teardown() {
		driver.quit();
	}

	public void ishomepageDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By
				.xpath("//a[text()='Signup']")));

		driver.findElement(By.xpath("//a[text()='Signup']")).isDisplayed();
		driver.findElement(By.xpath("//img[@title='Flipkart']"))
		.isDisplayed();
	}

	public void isSignInButtonDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[text()='Log In']")));
		driver.findElement(By.xpath("//a[text()='Log In']")).isDisplayed();
	}

	public void clickSigninLink() {
		driver.findElement(By.xpath("//a[text()='Log In']")).click();
	}

	public void isloginsectionDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By
				.xpath("//input[@class='_2zrpKA']")));
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By
				.xpath("//span[text()='Login']")));
		System.out.println("SUCCESS");
	}

	public void isElectronicsLinkDispalyed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[text()='Electronics']")));
		driver.findElement(By.xpath("//span[text()='Electronics']")).isDisplayed();

	}

	public void clickElectronicsLink() {
		driver.findElement(By.xpath("//span[text()='Electronics']")).click();
	}

	public void ismobileslinkDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[text()='Mobiles']")));
		driver.findElement(By.xpath("//a[text()='Mobiles']")).isDisplayed();		
	}

	public void typeSerachKeyword(String searchkeyword) {
		driver.findElement(By.name("q")).sendKeys(searchkeyword);
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public void clickSearchButton() {
		driver.findElement(By.cssSelector("button.vh79eN")).click();
		
	}

	public void asicsshoesdisplayed() {
		System.out.println("Results found");
	}

	public void verifyProducts(DataTable productDetails) {
		List<List<String>> data = productDetails.raw();
		//for (List<String> prd: data){
			// data.get(1).get(0) + data.get(1).get(1)
			driver.findElement(By.name("q")).sendKeys(data.get(1).get(0) + data.get(1).get(1));
		//}
		
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public void isShopclueshomepageDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By
				.xpath("//a[contains(text(),'Sign In')]")));

		driver.findElement(By.xpath("//a[contains(text(),'Sign In')]")).isDisplayed();
		driver.findElement(By.xpath("//img[contains(@src,'shopclues-logo_new.jpg']"))
		.isDisplayed();
		
	}

	public void islogoPresent() {
		driver.findElement(By.xpath("//img[@title='Flipkart']"))
		.isDisplayed();
		
	}

	public void clickLogo() {
		driver.findElement(By.xpath("//img[@title='Flipkart']")).click();
		System.out.println("Logo clicked");
		
	}
*/}