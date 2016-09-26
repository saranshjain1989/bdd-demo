package com.cucumber.StepDefinitions;

import java.net.MalformedURLException;

import com.cucumber.Selenium.SeleniumFunctions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ShopcluesLoginSD {

	SeleniumFunctions sf = new SeleniumFunctions();
	static String shopcluesURL = "http://shopclues.com/";

	@Given("^user is on shopclues homepage$")
	public void user_is_on_shopclues_homepage() throws MalformedURLException, InterruptedException {
		/*sf.createDriver(shopcluesURL);*/
		/*sf.isShopclueshomepageDisplayed();*/
	}

	@When("^user enters \"([^\"]*)\" in username field$")
	public void user_enters_username(String Username) {
		System.out.println(Username);
	}

	@When("^user enters \"([^\"]*)\" in password field$")
	public void user_enters_password(String Password) {
		System.out.println(Password);
	}

/*	@When("^user clicks Sign in button$")
	public void user_clicks_SignIn() {
		System.out.println("In Sign In");
	}*/

	@Then("^user gets login failed message$")
	public void user_gets_login_failed_message() throws Throwable {

	}
}