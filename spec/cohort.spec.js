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

  it("checks if the student is added to the student lists", () => {
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

  it("removes a specific student from the cohort", () => {
    //   setup
    const cohort5 = new Cohort(5);
    const arisaSigrist = new Student(
      0,
      "Arisa",
      "Sigrist",
      "sigristarisa",
      "arisasigrist.ch@gmail.com"
    );

    const bobRoss = new Student(1, "Bob", "Ross", "bobross", "hi@bobross.com");

    cohort5.add(arisaSigrist);
    cohort5.add(bobRoss);

    const expected = [arisaSigrist];
    // evaluate
    const result = cohort5.remove("Bob Ross");

    // verify
    expect(result).toEqual(expected);
  });

  fit("returns an error for trying to remove a non-existing student", () => {
    //   setup
    const cohort5 = new Cohort(5);
    const arisaSigrist = new Student(
      0,
      "Arisa",
      "Sigrist",
      "sigristarisa",
      "arisasigrist.ch@gmail.com"
    );

    const bobRoss = new Student(1, "Bob", "Ross", "bobross", "hi@bobross.com");

    cohort5.add(arisaSigrist);
    cohort5.add(bobRoss);

    const expected = "ERROR – this student do not exist";
    // evaluate
    const result = cohort5.remove("Michele Obama");

    // verify
    expect(result).toEqual(expected);
  });
});
