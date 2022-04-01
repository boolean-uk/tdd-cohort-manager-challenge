const CohortManager = require("../src/cohortmanager.js");
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
    expect(errorTest).toEqual(`Err: student not found`);
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
    expect(result).toEqual(`Err: cant add anymore students`);
  });

  it("returns error message when you try to create a cohort without a name or a cohort that already exists", () => {
    // setup
    const cohortManager = new CohortManager();

    cohortManager.createNewCohort("Cohort 1");

    // execute
    const result1 = cohortManager.createNewCohort("Cohort 1");
    const result2 = cohortManager.createNewCohort();
    // verify
    expect(result1).toEqual(`Err: cohort already exists`);
    expect(result2).toEqual("Err: please provide cohort name");
  });

  it("returns error message when you try to add student that is already present in another cohort", () => {
    // setup
    const cohortManager = new CohortManager();
    const morty = new Student(
      "Morty",
      "Smith",
      "mortysmith001",
      "mortysmith@gmail.com"
    );

    cohortManager.createNewCohort("Cohort 1");
    cohortManager.createNewCohort("Cohort 2");
    cohortManager.addStudentToCohort(morty, "Cohort 1");
    // execute
    const result = cohortManager.addStudentToCohort(morty, "Cohort 2");
    // verify
    expect(result).toEqual(`Err: student exists in other cohort.`);
  });
});
