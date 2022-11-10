const Cohortmanager = require("../src/Cohortmanager.js");

describe("Cohortmanager", () => {
    let cohortmanager

    beforeEach(() => {
        cohortmanager = new Cohortmanager()
    })

    it("created and without any input", () => {
        // set up
        const expected = {
            studentList: [],
            cohortList: []
        }

        expect(cohortmanager.studentList).toEqual([])
        expect(cohortmanager.cohortList).toEqual([]);
    })

    it("create 2 valid cohorts", () => {
        // set up
        cohortmanager.createCohort('abc')
        cohortmanager.createCohort("0123")

        expect(cohortmanager.cohortList[0].cohortName).toBe('abc')
        expect(cohortmanager.cohortList[1].cohortName).toBe('0123')
    })

    it("create 2 invalid cohorts name", () => {
        // set up

        expect(() => cohortmanager.createCohort(null)).toThrow()
        expect(() => cohortmanager.createCohort(123)).toThrow()
    })

    it("create 2 students", () => {
        // set up
        cohortmanager.createStudent('Bob', "Belcher", "http", "bob@burger.com")
        cohortmanager.createStudent('Tom', "Telmer", "http", "tom@soda.com")

        expect(cohortmanager.studentList.length).toBe(2)
        expect(cohortmanager.studentList[0].name).toBe('Bob')
        expect(cohortmanager.studentList[1].name).toBe('Tom')
    })

    it("search for a cohort by name", () => {
        // set up
        cohortmanager.createCohort('gold')
        const result = cohortmanager.searchCohort('gold')

        expect(result.cohortName).toBe("gold")
    })

})