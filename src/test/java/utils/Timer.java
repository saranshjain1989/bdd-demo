package utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
/*import org.testng.Reporter;*/

public class Timer {

/*	// Wait till JQuery is not loaded on the page

	public static boolean waitForJQueryProcessing(WebDriver driver,int timeOutInSeconds) 
	{
		boolean jQcondition = false;
		try
		{
			new WebDriverWait(driver, timeOutInSeconds)
			{
			}.until(new ExpectedCondition<Boolean>()
					{

				public Boolean apply(WebDriver driverObject)
				{
					return (Boolean) ((JavascriptExecutor) driverObject).executeScript("return jQuery.active == 0");
				}
					});
			jQcondition = (Boolean) ((JavascriptExecutor) driver).executeScript("return window.jQuery != undefined && jQuery.active === 0");
			return jQcondition;
		} catch (Exception e)
		{
			Reporter.log("JS exception caught");
		}
		return jQcondition;
	}*/

	// Call below method to define implicit wait

	public static void setimplicitWait(WebDriver driver,int timeOutInSeconds)
	{
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}


	// Call below method to wait for the element to be click-able

	public static void waitForElementToBeClickable(WebDriver driver,int timeOutInSeconds,By by)
	{
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions.elementToBeClickable(by));
	}

	// Call below method to wait for the element to be present

	public static void waitForElementToBePresent(WebDriver driver,int timeOutInSeconds)
	{
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("myDynamicElement")));
	}
	public static void waitForElementToBePresent(WebDriver driver,int timeOutInSeconds,By by)
	{
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions.presenceOfElementLocated(by));
	}
	
	public static void waitForElementToBeVisible(WebDriver driver,int timeOutInSeconds,By by)
	{
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions. visibilityOfElementLocated(by));
	}
	
	public static void waitForElementToBePresent(WebDriver driver,int timeOutInSeconds,WebElement webelement)
	{
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions. visibilityOf(webelement));
	}
	
	public static String getCurrentDate() 
	{	
		  DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
		   Date date = new Date();
          String currentDate = dateFormat.format(date);
		return currentDate;
	}
	public static String getYYYYMMDDDate() 
	{	
		  DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		   Date date = new Date();
          String currentDate = dateFormat.format(date);
		return currentDate;
	}
}
