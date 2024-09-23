describe("search filter", async () => {
  it("search filter", async () => {
    await browser.url(
      "https://rahulshettyacademy.com/seleniumPractise/#/offers"
    );
    await $("#search-field").setValue("Tomato");

    const tableListLocator = $$("tr td:nth-child(1)");

    await expect(await tableListLocator[0]).toHaveText("Tomato");
  });
});
