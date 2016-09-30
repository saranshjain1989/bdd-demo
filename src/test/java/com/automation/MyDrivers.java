package com.automation;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 Driver Class to get driver according to browser
 */
public class MyDrivers {

	public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;
	public static int waitTime = 30;

	public static String browser = "Chrome";
	public static String baseURL = "https://flipkart.com/";
	public static Platform currentOS = Platform.getCurrent();

	public String testName;
	public String ClassName = null;
	public String NewFileNamePath = null;

	public void createDriver() throws InterruptedException {

		System.out.println("Browser= " + browser);
		System.out.println("Platform= " + currentOS);
		System.out.println("URL= " + baseURL);

		initateDriver(3);
		OpenURL(baseURL);
		Thread.sleep(2000);
	}

	public static void initateDriver(int browserName) {
		System.out.println("INSIDE BROWSER DRIVER");
		switch (browserName)
		{
		case 1:
			if (driver == null)
			{
				driver = new FirefoxDriver();
			}
			break;

		case 2:
			if (driver == null)
			{
				driver = new InternetExplorerDriver();
			}
			break;

		case 3:
			if (driver == null)
			{   
				System.setProperty("webdriver.chrome.driver", "C:\\Users\\saranshjain\\Desktop12\\Drivers\\chromedriver.exe");
				driver = new ChromeDriver();
			}
			break;
		}    
	}

	public static void OpenURL(String baseURL) {
		driver.manage().window().maximize();

		driver.get(baseURL);

		waitVar = new WebDriverWait(driver, waitTime);
		driver.manage().timeouts().implicitlyWait(waitTime, TimeUnit.SECONDS);
	}

	public void tearDown() {
		if (!(driver == null)) {
			driver.quit();
			driver = null;
		}
	}

	public byte[] returnscreenShot()
	{
		return ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	}


}
