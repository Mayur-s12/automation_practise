describe("ecommerce application", async () => {
  it("login with valid credentials", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    const username = $(`//input[@id='username']`);
    await username.setValue("rahulshettyacademy");
    const password = $(`#password`);
    await password.setValue("learnin");
    await $(`#signInBtn`).click();
    await browser.pause(3000);
    await console.log(
      await $(`//div[@class='alert alert-danger col-md-12']`).getText()
    );
  });
});
