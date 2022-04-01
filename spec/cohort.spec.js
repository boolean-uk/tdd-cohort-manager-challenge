const Cohort = require("../src/cohort");
const Student = require("../src/student");

describe("Cohort", () => {
    let cohort;

    beforeEach(() => {
        cohort = new Cohort();
    });

    it("creates a cohort with a name", () => {
        // set up

        const cohort = new Cohort("AlphaZ");

        const expected = "AlphaZ";

        // execute
        const result = cohort.cohortName;

        // verify
        expect(result).toEqual(expected);
    });

    it("add student to cohort", () => {
        // set up

        const cohort = new Cohort("AlphaZ");

        const expected = 2;

        cohort.addStudentToCohort("Alice", "Jones", "XXX");
        cohort.addStudentToCohort("Alex", "Jones", "XXX");

        // execute
        const result = cohort.students.length;

        // verify
        expect(result).toEqual(expected);
    });

    it("remove student by gitHub ID", () => {
        // set up

        const cohort = new Cohort("AlphaZ");

        const expected = 1;

        cohort.addStudentToCohort("Alice", "Jones", "XXX");
        cohort.addStudentToCohort("Alex", "Jones", "ZZZ");

        cohort.removeStudentFromCohort("XXX");

        const result = cohort.students.length;

        // verify
        expect(result).toEqual(expected);
    });
});