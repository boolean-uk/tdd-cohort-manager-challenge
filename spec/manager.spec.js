const Cohort = require("../src/cohort.js");
const Manager = require("../src/manager.js");
const Student = require("../src/student.js");

describe("Manager", () => {
    let manager;

    beforeEach(() => {
        manager = new Manager();
    });

    it("creates cohort and adds to cohorts", () => {
        // set up
        const manager = new Manager();

        const expected = 2;

        // execute
        manager.addCohort("AlphaXYZ");
        manager.addCohort("AlphaABC");

        const result = manager.cohorts.length;

        console.log(manager);

        expect(result).toEqual(expected);
    });

    it("adds student to specific cohort", () => {
        // set up
        const cohorts = new Manager();

        const expected = "Joe Petri";

        // execute
        cohorts.addCohort("AlphaXYZ");
        cohorts.addCohort("AlphaABC");

        cohorts.addStudent("Alice", "Bas", "YYY", "AlphaXYZ");
        cohorts.addStudent("Joe", "Petri", "LLB", "AlphaXYZ");

        console.log(cohorts.cohorts[0].cohortName);
        console.log(cohorts.cohorts[0].students[1].fullName);

        const result = cohorts.cohorts[0].students[1].fullName;

        expect(result).toEqual(expected);
    });

    it("removes from specific cohort by gitHub", () => {
        // set up
        const cohorts = new Manager();

        const expected = 1;

        // execute
        cohorts.addCohort("AlphaXYZ");
        cohorts.addCohort("AlphaABC");

        cohorts.addStudent("Alice", "Bas", "YYY", "AlphaXYZ");
        cohorts.addStudent("Joe", "Petri", "LLB", "AlphaXYZ");
        // console.log(cohorts.cohorts[0]);
        cohorts.removeStudent("YYY", "AlphaXYZ");

        // console.log(cohorts.cohorts[0]);

        const result = cohorts.cohorts[0].students.length;

        expect(result).toEqual(expected);
    });

    it("returns string if student does not exist", () => {
        // set up
        const cohorts = new Manager();

        const expected = "Enter valid cohort and student data";

        // execute
        cohorts.addCohort("AlphaXYZ");
        cohorts.addCohort("AlphaABC");

        cohorts.addStudent("Alice", "Bas", "YYY", "AlphaXYZ");
        cohorts.addStudent("Joe", "Petri", "LLB", "AlphaXYZ");

        cohorts.removeStudent("YYY", "AlphaXYZ_DOES_NOT_EXIST");

        const result = cohorts.removeStudent("YYY", "AlphaXYZ_DOES_NOT_EXIST");

        expect(result).toEqual(expected);
    });

    it("returns string if cohort does not exist", () => {
        // set up
        const cohorts = new Manager();

        const expected = "Enter valid cohort and student data";

        // execute
        cohorts.addCohort("AlphaXYZ");
        cohorts.addCohort("AlphaABC");

        cohorts.addStudent("Alice", "Bas", "YYY", "AlphaXYZ");
        cohorts.addStudent("Joe", "Petri", "LLB", "AlphaXYZ");

        const result = cohorts.removeStudent("Student_NON-EXISTENT", "AlphaXYZ");

        expect(result).toEqual(expected);
    });
});