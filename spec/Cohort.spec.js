const Cohortmanager = require("../src/Cohortmanager.js");
const Cohort = require("../src/Cohort.js");

describe("Cohort", () => {
    let cohortmanager
    let test
    
    beforeEach(() => {
        cohortmanager = new Cohortmanager()
        test = cohortmanager.createCohort("test")[0]

    })

    it("created without any input", () => {
        // set up
        const expected = {
            cohortName: "test",
            studentInside: [],
            capacity: 24
        }

        expect(test.cohortName).toBe("test")
        expect(cohortmanager.cohortList.length).toBe(1)
    })

    it("add student inside the cohort", () => {
        // set up
        let bob = cohortmanager.createStudent('Bob', "Belcher", "http", "bob@burger.com")
        test.addStudent(bob)
        
        expect(test.studentInside.length).toBe(1)
        expect(test.studentInside[0].name).toBe("Bob")
        expect(cohortmanager.cohortList[0].studentInside.length).toBe(1)
    })

    it("remove student from the cohort", () => {
        // set up
        let bob = cohortmanager.createStudent('Bob', "Belcher", "http", "bob@burger.com")
        test.addStudent(bob)
        test.removeStudent(bob)
        
        expect(test.studentInside.length).toBe(0)
        expect(cohortmanager.cohortList[0].studentInside.length).toBe(0)
    })

})