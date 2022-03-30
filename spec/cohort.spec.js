const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("Cohort", () => {
  it("adds a student to a specific cohort", () => {
    //   setup
    const cohort5 = new Cohort(5);
    const arisaSigrist = new Student(
      0,
      "Arisa",
      "Sigrist",
      "sigristarisa",
      "arisasigrist.ch@gmail.com"
    );

    const expected = cohort5.add(arisaSigrist);
    // evaluate
    const result = `You've added Arisa Sigrist to Cohort 5`;
    // verify
    expect(result).toEqual(expected);
  });

  fit("checkes if the student is added to the student lists", () => {
    //   setup
    const cohort5 = new Cohort(5);
    const arisaSigrist = new Student(
      0,
      "Arisa",
      "Sigrist",
      "sigristarisa",
      "arisasigrist.ch@gmail.com"
    );

    cohort5.add(arisaSigrist);

    const expected = [arisaSigrist];
    // evaluate
    const result = cohort5.students;
    // verify
    expect(result).toEqual(expected);
  });
});
