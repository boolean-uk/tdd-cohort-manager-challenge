const CohortManager = require("../src/CohortManager.js");
const Cohort = require("../src/cohort.js");

describe("Cohort Manager", () => {

    it("Add a single Cohort", () => {
        // setup
        const cohortManager = new CohortManager()
        const cohort1 = new Cohort('Cohort1')
        // const cohort1 = cohort1
        // execute
        const addedCohort = cohortManager.add(cohort1)
        // verify
        expect(addedCohort).toEqual(cohortManager.cohortClasses)
    })

    it("Remove a single Cohort", () => {
        // setup
        const cohortManager = new CohortManager()
        const cohort1 = new Cohort('Cohort1')
        const cohort2 = new Cohort('Cohort2')
        // execute
        cohortManager.add(cohort1)
        const addedCohort2 = cohortManager.add(cohort2)

        const result1 = cohortManager.remove(cohort1.cohortName)
        const emptyArray = [cohort2]
        // verify
        expect(addedCohort2).toEqual(emptyArray)
        expect(result1).toEqual(cohort1)
    })

    it("When the cohort removed isn't found return error message", () => {
        // setup
        const cohortManager = new CohortManager()
        const cohort1 = new Cohort('Cohort1')
        const cohort2 = new Cohort('Cohort2')
        // execute
        const result1 = cohortManager.remove(cohort1.cohortName)
        addedCohort2 = cohortManager.add(cohort2)
        const emptyArray = [cohort2]
        // verify
        expect(addedCohort2).toEqual(emptyArray)
        expect(result1).toEqual('cohort not found!')
    })

})
