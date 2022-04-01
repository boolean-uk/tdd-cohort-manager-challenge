const CohortManager = require("../src/cohortmanager.js");
const Cohort = require("../src/cohort.js");
const student = require("../src/student.js");
const Student = require("../src/student.js");

describe("Cohort manager", () => {
  it("searches by student email - returns student or error message", () => {
    // setup
    const cohortManager = new CohortManager();
    const morty = new Student(
      "Morty",
      "Smith",
      "mortysmith001",
      "mortysmith@gmail.com"
    );

    cohortManager.createNewCohort("Cohort 1");
    cohortManager.addStudentToCohort(morty, "Cohort 1");

    // execute
    const result1 = cohortManager.searchByStudentEmail("mortysmith@gmail.com");
    const errorTest = cohortManager.searchByStudentEmail("bethsmith@gmail.com");
    // verify
    expect(result1).toEqual(morty);
    expect(errorTest).toEqual(`student not found`);
  });

  it("returns error message when you try to add students beyond max capacity (max capacity = 1 in this case)", () => {
    // setup
    const cohortManager = new CohortManager();
    const morty = new Student(
      "Morty",
      "Smith",
      "mortysmith001",
      "mortysmith@gmail.com"
    );
    const rick = new Student(
      "Rick",
      "Sanchez",
      "ricksanchez001",
      "ricksanchezgmail.com"
    );

    cohortManager.createNewCohort("Cohort 1", 1);
    cohortManager.addStudentToCohort(morty, "Cohort 1");
    // execute
    const result = cohortManager.addStudentToCohort(rick, "Cohort 1");
    // verify
    expect(result).toEqual(`cant add anymore students`);
  });
});
