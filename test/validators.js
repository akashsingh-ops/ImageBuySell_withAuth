// for run =>mocha command

const { italic } = require("discord.js");
const { describe } = require("sequelize/types/query-types");
const {
  validateName,
  validateEmail,
  validatePassword,
} = require("../utils/validator");
var expect = require("chai").expect;
describe("Tesing validator", function () {
  it("should return true for a valid name", function () {
    expect(validateName("Akash")).to.equal(true);
  });
  it("should return false for a invalid name", function () {
    expect(validateName("Akash01")).to.equal(false);
  });

  //   email
  it("should return true for a valid email", function () {
    expect(validateEmail("akash23@gmail.com")).to.equal(true);
  });
  it("should return false for a invalid name", function () {
    expect(validateEmail("akash.gmail.com")).to.equal(false);
  });
  //  pass
  it("should return true for a valid password", function () {
    expect(validatePassword("Akash")).to.equal(true);
  });
  it("should return false for a invalid name", function () {
    expect(validatePassword("Akash01")).to.equal(false);
  });
});
