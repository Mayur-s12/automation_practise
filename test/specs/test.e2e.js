describe("ecommerce application", async () => {
  it("login with Invalid credentials", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    const username = $(`//input[@id='username']`);
    await username.setValue("rahulshettyacademy");
    const password = $(`#password`);
    await password.setValue("learnin");
    await $(`#signInBtn`).click();
    await browser.waitUntil(
      async () => (await $("#signInBtn").getAttribute("value")) === "Sign In",
      {
        timeout: 10000,
        timeoutMsg: "error msg is not showing up",
      }
    );
    await expect($(`//p[@class='text-center text-white']`)).toHaveText(
      "(username is rahulshettyacademy and Password is learning)"
    );
  });

  it("login with valid credentials", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    const username = $(`//input[@id='username']`);
    await username.setValue("rahulshettyacademy");
    const password = $(`#password`);
    await password.setValue("learning");
    await $(`#signInBtn`).click();
    await $(`//a[@class='nav-link btn btn-primary']`).waitForExist();
    await expect(browser).toHaveUrl(
      "https://rahulshettyacademy.com/angularpractice/shop"
    );
  });
});
