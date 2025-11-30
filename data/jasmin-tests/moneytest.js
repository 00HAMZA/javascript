import { formatCurrency } from "../../scripts/utiles/money.js";
describe("tests suite : formatCurrency", () => {
  it("converts Cents into Dollars :", () => {
    expect(formatCurrency(2094)).toEqual("20.94");
  });
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("round out to the nearest cents", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  })
});
