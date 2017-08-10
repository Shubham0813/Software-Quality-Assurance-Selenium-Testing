using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;

namespace SeleniumProjectForSellMyCar.com
{
    [TestFixture]
    public class Tests
    {
        private IWebDriver driver;
        private string baseURL;

        [SetUp]
        public void SetupTest()
        {
            driver = new FirefoxDriver();
            baseURL = "http://localhost/qa4/website/";
        }

        [TearDown]
        public void TeardownTest()
        {
            if (driver != null)
            {
                driver.Quit();
            }
        }


        [Test]
        public void SellMyCar_FindSellNewCarButton_ButtonExists()
        {

            driver.Navigate().GoToUrl(baseURL);

            // Wait for 10 seconds for the following check to occur.
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.XPath("//*[@id='newCarButton']")) != null);
        }

        [Test]
        public void SellMyCar_FindSearchForCarsButton_ButtonExists()
        {
            driver.Navigate().GoToUrl(baseURL);

            // Wait for 10 seconds for the following check to occur.
            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => d.FindElement(By.XPath("//*[@id='searchCarsButton']")) != null);
        }

        [Test]
        public void SellMyCar_ClickOnSellNewCar_SellingFormModalOpens()
        {
            driver.Navigate().GoToUrl(baseURL);

            IWebElement button =  null;

            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => (button = d.FindElement(By.XPath("//*[@id='newCarButton']"))) != null);

            IJavaScriptExecutor executor = (IJavaScriptExecutor)driver;
            executor.ExecuteScript("arguments[0].click();", button);

            // Wait for 10 seconds and check if Selling Form opens.
            wait.Until(d => d.FindElement(By.XPath("//*[@id='modalSellingForm']/div/div/div[1]")) != null);
        }

        [Test]
        public void SellMyCar_FillSellingForm_CorrectURLDisplayed()
        {
            driver.Navigate().GoToUrl(baseURL);

            IWebElement button = null;

            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => (button = d.FindElement(By.XPath("//*[@id='newCarButton']"))) != null);

            IJavaScriptExecutor executor = (IJavaScriptExecutor)driver;
            executor.ExecuteScript("arguments[0].click();", button);

            // Wait for 10 seconds and check if Selling Form opens.
            wait.Until(d => d.FindElement(By.XPath("//*[@id='modalSellingForm']/div/div/div[1]")) != null);

            string script = "arguments[0].setAttribute('value', arguments[1]);";

            IWebElement inputControl = driver.FindElement(By.XPath("//*[@id='form1']"));
            executor.ExecuteScript(script, inputControl, "Shubham");

            inputControl = driver.FindElement(By.XPath("//*[@id='form2']"));
            executor.ExecuteScript(script, inputControl, "12, 123 AB CD");

            inputControl = driver.FindElement(By.XPath("//*[@id='form3']"));
            executor.ExecuteScript(script, inputControl, "Kitchener");
            
            inputControl = driver.FindElement(By.XPath("//*[@id='form4']"));
            executor.ExecuteScript(script, inputControl, "123-123-1234");

            inputControl = driver.FindElement(By.XPath("//*[@id='form5']"));
            executor.ExecuteScript(script, inputControl, "shubham.sharma0677@gmail.com");

            inputControl = driver.FindElement(By.XPath("//*[@id='form6']"));
            executor.ExecuteScript(script, inputControl, "2012 Ford Mustang");

            button = driver.FindElement(By.XPath("//*[@id='sellingForm']/div[7]/button"));
            executor.ExecuteScript("arguments[0].click();", button);

            IWebElement successMessageBox = null; 
            wait.Until(d => (successMessageBox = d.FindElement(By.Id("url"))) != null);

            string generatedURL = successMessageBox.Text;

            Assert.AreEqual("http://www.jdpower.com/cars/Ford/Mustang/2012", generatedURL);
        }

        [Test]
        public void SellMyCar_InvalidPhoneNumberInSellingForm_ShowsError()
        {
            driver.Navigate().GoToUrl(baseURL);

            IWebElement button = null;

            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(20));
            wait.Until(d => (button = d.FindElement(By.XPath("//*[@id='newCarButton']"))) != null);

            IJavaScriptExecutor executor = (IJavaScriptExecutor)driver;
            executor.ExecuteScript("arguments[0].click();", button);

            // Wait for 10 seconds and check if Selling Form opens.
            wait.Until(d => d.FindElement(By.XPath("//*[@id='modalSellingForm']/div/div/div[1]")) != null);

            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//*[@id='form4']")));

            var phoneNumberInputField = driver.FindElement(By.XPath("//*[@id='form4']"));
            phoneNumberInputField.Click();
            phoneNumberInputField.SendKeys("1231231234");

            var phoneNumberErrorSpan = driver.FindElement(By.Id("form4Error"));

            Assert.AreEqual("Please enter number in correct format: 123-123-1234 or (123) 123-1234", phoneNumberErrorSpan.Text);
        }

        [Test]
        public void SellMyCar_SubmitSellingFormWithoutFillingAllFields_ShowsFillAllFieldsMessage()
        {
            driver.Navigate().GoToUrl(baseURL);

            IWebElement button = null;

            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => (button = d.FindElement(By.XPath("//*[@id='newCarButton']"))) != null);

            IJavaScriptExecutor executor = (IJavaScriptExecutor)driver;
            executor.ExecuteScript("arguments[0].click();", button);

            // Wait for 10 seconds and check if Selling Form opens.
            wait.Until(d => d.FindElement(By.XPath("//*[@id='modalSellingForm']/div/div/div[1]")) != null);

            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//*[@id='form1']")));

            var inputControl = driver.FindElement(By.Id("form1"));
            inputControl.SendKeys("Shubham");

            inputControl = driver.FindElement(By.Id("form2"));
            inputControl.SendKeys("12, 123 ab cd");

            inputControl = driver.FindElement(By.Id("form3"));
            inputControl.SendKeys("Kitchener");

            inputControl = driver.FindElement(By.Id("form4"));
            inputControl.SendKeys("123-123-1234");

            inputControl = driver.FindElement(By.Id("form5"));
            inputControl.SendKeys("123@gmail.com");

            driver.FindElement(By.Id("formSubmitButton")).Click();

            IWebElement messageBox = null;
            wait.Until(d => (messageBox = d.FindElement(By.Id("url-jd"))) != null);

            string message = messageBox.Text;

            Assert.AreEqual("Please fill all fields before submitting form", message);
        }

        [Test]
        public void SellMyCar_SubmitNewPostAndSearchForCars_NewPostAppearsAsFirstInSearchList()
        {
            driver.Navigate().GoToUrl(baseURL);

            IWebElement button = null;

            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            wait.Until(d => (button = d.FindElement(By.XPath("//*[@id='newCarButton']"))) != null);

            IJavaScriptExecutor executor = (IJavaScriptExecutor)driver;
            executor.ExecuteScript("arguments[0].click();", button);

            // Wait for 10 seconds and check if Selling Form opens.
            wait.Until(d => d.FindElement(By.XPath("//*[@id='modalSellingForm']/div/div/div[1]")) != null);

            string script = "arguments[0].setAttribute('value', arguments[1]);";

            IWebElement inputControl = driver.FindElement(By.XPath("//*[@id='form1']"));
            executor.ExecuteScript(script, inputControl, "Shubham Sharma");

            inputControl = driver.FindElement(By.XPath("//*[@id='form2']"));
            executor.ExecuteScript(script, inputControl, "1, 111 Green Valley Drive");

            inputControl = driver.FindElement(By.XPath("//*[@id='form3']"));
            executor.ExecuteScript(script, inputControl, "Kitchener");

            inputControl = driver.FindElement(By.XPath("//*[@id='form4']"));
            executor.ExecuteScript(script, inputControl, "999-999-9999");

            inputControl = driver.FindElement(By.XPath("//*[@id='form5']"));
            executor.ExecuteScript(script, inputControl, "test2@gmail.com");

            inputControl = driver.FindElement(By.XPath("//*[@id='form6']"));
            executor.ExecuteScript(script, inputControl, "2012 Ford Mustang");

            button = driver.FindElement(By.XPath("//*[@id='sellingForm']/div[7]/button"));
            executor.ExecuteScript("arguments[0].click();", button);

            IWebElement successMessageBox = null;
            wait.Until(d => (successMessageBox = d.FindElement(By.Id("url"))) != null);

            driver.FindElement(By.Id("sellingFormModalCloseButton")).Click();
            
            driver.FindElement(By.Id("searchCarsButton")).Click();
            driver.FindElement(By.Id("searchCarsButton")).Click();

            wait.Until(ExpectedConditions.ElementIsVisible(By.XPath("//*[@id='post1']/div[1]")));
            
            Assert.AreEqual("Ford Mustang 2012", driver.FindElement(By.XPath("//*[@id='post1']/div[1]")).Text);
            Assert.AreEqual("Seller's name:Shubham Sharma", driver.FindElement(By.XPath("//*[@id='post1']/div[2]/h4")).Text);
            Assert.AreEqual("http://www.jdpower.com/cars/Ford/Mustang/2012", driver.FindElement(By.XPath("//*[@id='post1']/div[3]/p/a")).Text);
        }
    }
}