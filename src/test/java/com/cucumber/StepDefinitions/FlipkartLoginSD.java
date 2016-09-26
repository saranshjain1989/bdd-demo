package com.cucumber.StepDefinitions;

import java.net.MalformedURLException;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import com.automation.MyDrivers;
import com.cucumber.Selenium.SeleniumFunctions;
import com.pages.FlipkartHomePage;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FlipkartLoginSD extends MyDrivers{

	SeleniumFunctions sf = new SeleniumFunctions();
	FlipkartHomePage fhp= PageFactory.initElements(driver, FlipkartHomePage.class);
	static String flipkartURL = "http://flipkart.com/";


	@Given("^user is on flipkart homepage$")
	public void user_is_on_flipkart_homepage() throws MalformedURLException,InterruptedException {
		System.out.println("INSIDE STEP DEFINITION");
		 /*sf.createDriver(flipkartURL);
		sf.ishomepageDisplayed();*/
		FlipkartHomePage.ishomepageDisplayed();
	}

	@Given("^Flipkart logo is present on the screen$")
	public void flipkart_logo_is_present() throws MalformedURLException,
	InterruptedException {
		/* sf.islogoPresent();*/
	}

	@Given("^Sign in button is present on the screen$")
	public void SignIn_button_is_present_on_the_screen() throws Throwable {
		FlipkartHomePage.isSignInButtonDisplayed();
	}

	@Given("^user types \"(.*?)\" in search box$")
	public void user_types_keyword_in_searchbox(String searchkeyword) throws MalformedURLException,
	InterruptedException {
		/*sf.typeSerachKeyword(searchkeyword);*/
	}

	@When("^user clicks search button$")
	public void user_clicks_Search_button() {
		/*sf.clickSearchButton();*/
	}

	@When("^user clicks on Flipkart logo$")
	public void user_clicks_Logo() {
		/*sf.clickLogo();*/
	}

	@When("^user clicks on Sign in button$")
	public void user_clicks_on_Sign_in_button() {
		/*sf.clickSigninLink();*/
	}

	@Then("^user is displayed login screen$")
	public void user_is_displayed_login_screen() {
		/*sf.isloginsectionDisplayed();*/
		// sf.teardown();
	}

	@Then("^user is displayed home page$")
	public void user_is_displayed_homepage() {
		/*  sf.ishomepageDisplayed();*/
		// sf.teardown();
	}

	@Then("^asics shoes are displayed$")
	public void asics_shoes_are__displayed() {
		/* sf.asicsshoesdisplayed();*/
		//sf.teardown();
	}

	@Then("^we verify the following products available$")
	public void verify_products(DataTable productDetails) {
		/*sf.verifyProducts(productDetails);*/
		//sf.teardown();
	}

	@Given("^Electronics button is present on the screen$")
	public void electronics_button_is_present_on_the_screen() throws Throwable {
		 /*sf.isElectronicsLinkDispalyed();*/
		FlipkartHomePage.isElectronicsLinkDispalyed();
	}

	@When("^user clicks on Electronics button$")
	public void user_clicks_on_Electronics_button() throws Throwable {
		/*sf.clickElectronicsLink();*/
	}

	@Then("^user is displayed mobile option$")
	public void user_is_displayed_mobile_option() throws Throwable {
		System.out.println("TEST CASE ENDS");
		/*sf.ismobileslinkDisplayed();*/
		//sf.teardown();

	}
	
	@Then("^user is displayed pendrives option$")
	public void user_is_displayed_pendrives_option(){
		FlipkartHomePage.isPenDrivesDispalyed();
		System.out.println("TEST CASE PENDRIVE ENDS");
		/*sf.ismobileslinkDisplayed();*/
		//sf.teardown();
	}
}