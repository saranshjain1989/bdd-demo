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
  "duration": 9577443,
  "status": "passed"
});
formatter.before({
  "duration": 90974,
  "status": "passed"
});
formatter.before({
  "duration": 9760683358,
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
  "duration": 260827517,
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
  "duration": 45686115,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "duration": 16329,
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
  "duration": 1924912,
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
  "duration": 92373,
  "status": "passed"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 17262,
  "status": "passed"
});
formatter.match({
  "location": "ShopcluesLoginSD.user_gets_login_failed_message()"
});
formatter.result({
  "duration": 18194,
  "status": "passed"
});
formatter.after({
  "duration": 1227562826,
  "status": "passed"
});
formatter.after({
  "duration": 182881,
  "status": "passed"
});
formatter.before({
  "duration": 1342213,
  "status": "passed"
});
formatter.before({
  "duration": 496857,
  "status": "passed"
});
formatter.before({
  "duration": 5225282882,
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: received Inspector.detached event\n  (failed to check if window was closed: unknown error: DevTools returned unknown type:service_worker)\n  (Session info: chrome\u003d53.0.2785.116)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.80 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027XE-T-SARANSHJ\u0027, ip: \u0027192.168.35.2\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\SARANS~1\\AppData\\Local\\Temp\\scoped_dir316_13685}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d53.0.2785.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2fe22c4b5a8fde2685bd670764336d16\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat com.automation.MyDrivers.OpenURL(MyDrivers.java:72)\r\n\tat com.automation.MyDrivers.createDriver(MyDrivers.java:37)\r\n\tat com.cucumber.StepDefinitions.Hooks.createDriver(Hooks.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FlipkartLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "FlipkartLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShopcluesLoginSD.user_gets_login_failed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 946991192,
  "status": "passed"
});
formatter.after({
  "duration": 50852,
  "status": "passed"
});
formatter.before({
  "duration": 48053,
  "status": "passed"
});
formatter.before({
  "duration": 45254,
  "status": "passed"
});
