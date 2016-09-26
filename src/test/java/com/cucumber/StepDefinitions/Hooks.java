package com.cucumber.StepDefinitions;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.automation.MyDrivers;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends MyDrivers{
	
	MyDrivers mydrvr = new MyDrivers();

	/*public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;

	public static String browser = "chrome";
	public static String baseURL = "http://flipkart.com/";*/
	
    @Before/*("@sanity")*/
	public void createDriver() throws InterruptedException {

        System.out.println("Inside BEFORE order 10000");
        mydrvr.createDriver();
    }
    
	@Before (order=200)
	public static void Before1(){
		System.out.println("Inside BEFORE order 200");
	}
	
	@Before (order=100)
	public static void Before2(){
		System.out.println("Inside BEFORE order 100");
	}

/*	public static void createDriverBefore(final String browserId) {
		if(browserId.equalsIgnoreCase("chrome")){

			System.setProperty("webdriver.chrome.driver", "C:\\Users\\saranshjain\\Desktop\\Drivers\\chromedriver.exe");
			driver = new ChromeDriver();
		}
	}
		public static void openUrl(String baseURL){
			driver.manage().window().maximize();
			driver.get(baseURL);
		}*/
		
		@After("@sanity,@regression")
		public void tearDown1(){
			System.out.println("Inside AFTER 10000");
			mydrvr.tearDown();
		}
		
		@After (order=200)
		public void tearDown(){
			System.out.println("Inside AFTER order 200");
			
		}
}
