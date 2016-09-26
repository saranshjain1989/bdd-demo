$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("flipkart_login.feature");
formatter.feature({
  "line": 1,
  "name": "Flipkart login",
  "description": "",
  "id": "flipkart-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "login with wrong username and password",
  "description": "",
  "id": "flipkart-login;login-with-wrong-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Sign in button is present on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cUsername\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003cPassword\u003e\" in password field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user gets login failed message",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "flipkart-login;login-with-wrong-username-and-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 17,
      "id": "flipkart-login;login-with-wrong-username-and-password;;1"
    },
    {
      "cells": [
        "nousername",
        "nopassword"
      ],
      "line": 18,
      "id": "flipkart-login;login-with-wrong-username-and-password;;2"
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 19,
      "id": "flipkart-login;login-with-wrong-username-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9685216,
  "status": "passed"
});
formatter.before({
  "duration": 80711,
  "status": "passed"
});
formatter.before({
  "duration": 27436403911,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "flow till step1",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on flipkart homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_on_flipkart_homepage()"
});
formatter.result({
  "duration": 261090762,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "login with wrong username and password",
  "description": "",
  "id": "flipkart-login;login-with-wrong-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Sign in button is present on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"nousername\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters \"nopassword\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user gets login failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipkartLoginSD.SignIn_button_is_present_on_the_screen()"
});
formatter.result({
  "duration": 85196781,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 22394,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 34056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nousername",
      "offset": 13
    }
  ],
  "location": "ShopcluesLoginSD.user_enters_username(String)"
});
formatter.result({
  "duration": 3012401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nopassword",
      "offset": 13
    }
  ],
  "location": "ShopcluesLoginSD.user_enters_password(String)"
});
formatter.result({
  "duration": 166552,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 31257,
  "status": "passed"
});
formatter.match({
  "location": "ShopcluesLoginSD.user_gets_login_failed_message()"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.after({
  "duration": 1298798259,
  "status": "passed"
});
formatter.after({
  "duration": 61116,
  "status": "passed"
});
formatter.before({
  "duration": 181947,
  "status": "passed"
});
formatter.before({
  "duration": 124097,
  "status": "passed"
});
formatter.before({
  "duration": 43713374509,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "flow till step1",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on flipkart homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_on_flipkart_homepage()"
});
formatter.result({
  "duration": 141873958,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "login with wrong username and password",
  "description": "",
  "id": "flipkart-login;login-with-wrong-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Sign in button is present on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"username1\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters \"password1\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user gets login failed message",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipkartLoginSD.SignIn_button_is_present_on_the_screen()"
});
formatter.result({
  "duration": 45720194,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 22393,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 13
    }
  ],
  "location": "ShopcluesLoginSD.user_enters_username(String)"
});
formatter.result({
  "duration": 146491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 13
    }
  ],
  "location": "ShopcluesLoginSD.user_enters_password(String)"
});
formatter.result({
  "duration": 108702,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "location": "ShopcluesLoginSD.user_gets_login_failed_message()"
});
formatter.result({
  "duration": 24260,
  "status": "passed"
});
formatter.after({
  "duration": 1124801198,
  "status": "passed"
});
formatter.after({
  "duration": 57850,
  "status": "passed"
});
formatter.before({
  "duration": 84909,
  "status": "passed"
});
formatter.before({
  "duration": 153022,
  "status": "passed"
});
formatter.before({
  "duration": 3868102840,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "flow till step1",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on flipkart homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_on_flipkart_homepage()"
});
formatter.result({
  "duration": 28901535965,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Available logo",
  "description": "",
  "id": "flipkart-login;available-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@sanity"
    },
    {
      "line": 34,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "Flipkart logo is present on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user clicks on Flipkart logo",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user is displayed home page",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipkartLoginSD.flipkart_logo_is_present()"
});
formatter.result({
  "duration": 35457,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_Logo()"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_homepage()"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.after({
  "duration": 1219921595,
  "status": "passed"
});
formatter.after({
  "duration": 43854,
  "status": "passed"
});
formatter.uri("shopclues_login.feature");
formatter.feature({
  "line": 2,
  "name": "Shopclues login",
  "description": "",
  "id": "shopclues-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@important"
    }
  ]
});
formatter.before({
  "duration": 124564,
  "status": "passed"
});
formatter.before({
  "duration": 40122,
  "status": "passed"
});
formatter.before({
  "duration": 26413036227,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "flow till step1",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on flipkart homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_on_flipkart_homepage()"
});
formatter.result({
  "duration": 163732877,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#When user clicks on Sign in button"
    },
    {
      "line": 10,
      "value": "#Then user is displayed login screen"
    },
    {
      "line": 11,
      "value": "#When user types \"asics shoes\" in search box"
    },
    {
      "line": 12,
      "value": "#When user clicks search button"
    },
    {
      "line": 13,
      "value": "#Then asics shoes are displayed"
    }
  ],
  "line": 16,
  "name": "Available content",
  "description": "",
  "id": "shopclues-login;available-content",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Electronics button is present on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks on Electronics button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user is displayed mobile option",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipkartLoginSD.electronics_button_is_present_on_the_screen()"
});
formatter.result({
  "duration": 45909606,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Electronics_button()"
});
formatter.result({
  "duration": 18194,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_mobile_option()"
});
formatter.result({
  "duration": 76978,
  "status": "passed"
});
formatter.after({
  "duration": 1235160415,
  "status": "passed"
});
formatter.after({
  "duration": 40121,
  "status": "passed"
});
formatter.before({
  "duration": 64382,
  "status": "passed"
});
formatter.before({
  "duration": 27526,
  "status": "passed"
});
formatter.before({
  "duration": 20459317659,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "flow till step1",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on flipkart homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_on_flipkart_homepage()"
});
formatter.result({
  "duration": 134208828,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Context of regression",
  "description": "",
  "id": "shopclues-login;context-of-regression",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Electronics button is present on the screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Electronics button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user is displayed pendrives option",
  "keyword": "Then "
});
formatter.match({
  "location": "FlipkartLoginSD.electronics_button_is_present_on_the_screen()"
});
formatter.result({
  "duration": 46951373,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Electronics_button()"
});
formatter.result({
  "duration": 16796,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_pendrives_option()"
});
formatter.result({
  "duration": 60073904360,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 30 seconds waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //span[text()\u003d\u0027Pen\u0027]\u0027\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027XE-T-SARANSHJ\u0027, ip: \u0027192.168.54.2\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\SARANS~1\\AppData\\Local\\Temp\\scoped_dir65200_18192}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4bbc9234b297d425cd206904ccea1de9\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\r\n\tat utils.Timer.waitForElementToBePresent(Timer.java:83)\r\n\tat com.pages.FlipkartHomePage.isPenDrivesDispalyed(FlipkartHomePage.java:62)\r\n\tat com.cucumber.StepDefinitions.FlipkartLoginSD.user_is_displayed_pendrives_option(FlipkartLoginSD.java:109)\r\n\tat ✽.Then user is displayed pendrives option(shopclues_login.feature:25)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.01 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027XE-T-SARANSHJ\u0027, ip: \u0027192.168.54.2\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\SARANS~1\\AppData\\Local\\Temp\\scoped_dir65200_18192}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4bbc9234b297d425cd206904ccea1de9\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Pen\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat utils.Timer.waitForElementToBePresent(Timer.java:83)\r\n\tat com.pages.FlipkartHomePage.isPenDrivesDispalyed(FlipkartHomePage.java:62)\r\n\tat com.cucumber.StepDefinitions.FlipkartLoginSD.user_is_displayed_pendrives_option(FlipkartLoginSD.java:109)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1213474114,
  "status": "passed"
});
formatter.after({
  "duration": 39189,
  "status": "passed"
});
});