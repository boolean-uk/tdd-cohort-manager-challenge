import CohortManager from "../src/CohortManager.js"

describe("CohortManager", () => {
    let cohortManager

    beforeEach(() => {
        cohortManager = new CohortManager()
    })

    it("should exist", () => {
        expect(cohortManager).toBeInstanceOf(CohortManager)
    })

    it("should be able to create a cohort", () => {
        cohortManager.createCohort("alpha")
        expect(cohortManager.cohorts).toEqual([{name: "alpha", students: []}])
    })

    it("should throw an error if the name isn't a string when creating a cohort", () => {
        expect(() => cohortManager.createCohort(42)).toThrow("Name must be a string")
    })

    it("should throw an error if no name value given when creating a cohort", () => {
        expect(() => cohortManager.createCohort()).toThrow("No value given")
    })
})