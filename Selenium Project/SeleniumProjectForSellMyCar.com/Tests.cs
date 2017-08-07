using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
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
            driver = new ChromeDriver();
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
    }
}
