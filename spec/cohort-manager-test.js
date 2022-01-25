const CohortManager = require("../src/cohort-manager.js");

describe("Cohort Manager", () => {
  let cohortManager;

  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  it("Create a cohort with a name", () => {
    const cohortName = "Cohort Four";
    cohortManager.createCohort(cohortName);
    expect(cohortManager.cohorts.length).toEqual(1);
    expect(cohortManager.cohorts[0].cohortName).toEqual(cohortName);
  });

  it("Search for cohort by name", () => {
    const expected = { cohortName: "Cohort Five", students: [] };
    cohortManager.createCohort("Cohort One");
    cohortManager.createCohort("Cohort Two");
    cohortManager.createCohort("Cohort Three");
    cohortManager.createCohort("Cohort Four");
    cohortManager.createCohort("Cohort Five");
    expect(cohortManager.searchCohorts("Cohort Five")).toEqual(expected);
  });

  it("Add student to specific cohort", () => {
    const expected = {
      id: 100,
      name: "Michael",
      surname: "Johnson",
      github: "mj100",
      email: "mj100@aol.net",
    };
    cohortManager.createCohort("Cohort Four");
    cohortManager.createCohort("Cohort Five");

    const result = cohortManager.addStudent(
      "Cohort Four",
      100,
      "Michael",
      "Johnson",
      "mj100",
      "mj100@aol.net"
    );

    expect(result).toEqual(expected);
  });

  it("Remove a cohort by cohort name", () => {
    const expected = [
      { cohortName: "Cohort One", students: [] },
      { cohortName: "Cohort Three", students: [] },
    ];
    cohortManager.createCohort("Cohort One");
    cohortManager.createCohort("Cohort Two");
    cohortManager.createCohort("Cohort Three");
    const result = cohortManager.removeCohort("Cohort Two");

    expect(result).toEqual(expected);
  });

  it("Remove a student by id", () => {
    const expected = {
      cohortName: "Cohort Four",
      students: [
        {
          id: 700,
          name: "James",
          surname: "Wheeler",
          github: "jwheel7",
          email: "jwheel7@provider.com",
        },
        {
          id: 900,
          name: "Morris",
          surname: "Miner",
          github: "morris900",
          email: "mmorris9@internet.biz",
        },
      ],
    };
    cohortManager.createCohort("Cohort Four");
    cohortManager.addStudent(
      "Cohort Four",
      700,
      "James",
      "Wheeler",
      "jwheel7",
      "jwheel7@provider.com"
    );
    cohortManager.addStudent(
      "Cohort Four",
      900,
      "Morris",
      "Miner",
      "morris900",
      "mmorris9@internet.biz"
    );
    cohortManager.addStudent(
      "Cohort Four",
      1000,
      "Graham",
      "Sharp",
      "gshapr5",
      "gsharp5@coldmail.org"
    );
    cohortManager.removeStudent(1000, "Cohort Four");
  });

  it("Return error if cohort not found (searchCohorts)", () => {
    const expected = "Cohort Fifteen not found";

    cohortManager.createCohort("Cohort One");
    cohortManager.createCohort("Cohort Two");
    cohortManager.createCohort("Cohort Three");

    expect(cohortManager.searchCohorts("Cohort Fifteen")).toEqual(expected);
  });

  it("Return error if cohort not found (removeCohort)", () => {
    const expected = "Cohort Fifteen not found";

    cohortManager.createCohort("Cohort One");
    cohortManager.createCohort("Cohort Two");
    cohortManager.createCohort("Cohort Three");

    expect(cohortManager.removeCohort("Cohort Fifteen")).toEqual(expected);
  });

  it("Return error if student not found (removeStudent)", () => {
    const expected = "Student 314 not found";

    cohortManager.createCohort("Cohort Four");

    cohortManager.addStudent(
      "Cohort Four",
      700,
      "James",
      "Wheeler",
      "jwheel7",
      "jwheel7@provider.com"
    );
    cohortManager.addStudent(
      "Cohort Four",
      900,
      "Morris",
      "Miner",
      "morris900",
      "mmorris9@internet.biz"
    );
    cohortManager.addStudent(
      "Cohort Four",
      1000,
      "Graham",
      "Sharp",
      "gshapr5",
      "gsharp5@coldmail.org"
    );

    expect(cohortManager.removeStudent(314, "Cohort Four")).toEqual(expected);
  });
});
