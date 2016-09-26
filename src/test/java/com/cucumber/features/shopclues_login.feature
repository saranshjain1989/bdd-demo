@important 
Feature: Shopclues login 

Background: flow till step1 
	Given user is on flipkart homepage 
	
	
	
	#When user clicks on Sign in button
	#Then user is displayed login screen
	#When user types "asics shoes" in search box
	#When user clicks search button
	#Then asics shoes are displayed
	
@sanity 
Scenario: Available content 
	Given Electronics button is present on the screen 
	When user clicks on Electronics button 
	Then user is displayed mobile option 
	
@regression 
Scenario: Context of regression 
	Given Electronics button is present on the screen 
	When user clicks on Electronics button 
	Then user is displayed pendrives option 
