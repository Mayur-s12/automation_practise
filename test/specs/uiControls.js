describe("UI Controls Check", async () => {
  it("radio buttons", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    const username = $(`//input[@id='username']`);
    await username.setValue("rahulshettyacademy");
    const password = $(`#password`);
    await password.setValue("learning");

    //with multiple elements of same class
    const radioButtons = $$(".radiotextsty");
    await radioButtons[1].click();
    await expect($(".modal-content")).toBeDisplayed();
    await $("#cancelBtn").click();
    //and when clicking admin is shouldn't display
    await radioButtons[0].click();
    await expect($(".modal-content")).not.toBeDisplayed();

    //dropdown tst
    const dropdown = $("select.form-control");
    await dropdown.selectByAttribute("value", "teach");
    await browser.pause(3000);
  });
});
