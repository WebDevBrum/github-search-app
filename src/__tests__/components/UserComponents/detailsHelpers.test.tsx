import {
  removeFirstWord,
  convertDate,
} from "../../../components/UserComponents/detailsHelpers.";

describe("remove first word", () => {
  test("it should remove the first word", () => {
    let output = removeFirstWord("Hello Scott");

    expect(output).toEqual("Scott");

    output = removeFirstWord("Hello Scott Davies");

    expect(output).toEqual("Scott Davies");
  });

  test("it should return an empty string if there is only one word", () => {
    const output = removeFirstWord("Scott");

    expect(output).toEqual("");
  });

  describe("convert date", () => {
    test("it should convert the date to the correct format of", () => {
      const output = convertDate("2011-01-25T18:44:36Z");

      expect(output).toMatch(/Jan 25 2011/i);
    });
  });
});
