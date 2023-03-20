const Cohort = require("../cohort.js");

describe("Cohort", () => {
    let cohort

    beforeEach(() => {
        cohort = new Cohort()
    })
    it("create a cohort", () => {
        //set up
        const expected = { id: 1, name: "Cohort-9" }
        //execute
        const result = cohort.createNewCohort("Cohort-9")
        //verify
        expect(result).toEqual(expected)
    })

    it("Create new student", () => {
        //set up
        const expected = {
            id: 1,
            studentFirstName: "Asiye",
            studentLastName: "Yurtkuran",
            githubUserName: "Asiyeyurtkuran",
            email: "asiyeyurtkuran@gmail.com",
            cohort: "Cohort-1"
        }
        //execute
        const result = cohort.createNewStudent()
        //verify
        expect(result).toEqual(expected)
    })

    it("search for a cohort by cohort name", () => {
        //set up
        cohort.createNewCohort("Cohort-9")
        cohort.createNewCohort("Cohort-10")
        // const cohort3 = cohort.createNewCohort("Cohort-11")
        const expected = (cohort.cohorts = [{ cohortName: "Cohort-9" }])
        //execute
        const result = cohort.searchCohort("Cohort-9")
        //verify
        expect(result).toEqual(expected)
    })

    it("return an error if searched cohort not found", () => {
        //set up
        cohort.createNewCohort("Cohort-9")
        cohort.createNewCohort("Cohort-10")
        //execute

        const result = cohort.searchCohort("Cohort-11")
        //verify
        expect(result).toEqual("Cohort not found")
    })

    it("Remove cohort", () => {
        //set up
        cohort.createNewCohort("Cohort-1")
        // const cohort2 = cohort.createNewCohort("Cohort-2")
        // cohort.removeCohort("Cohort-1")
        //execute
        const expected = []
        const result = cohort.removeCohort("Cohort-1")
        //verify
        expect(result).toEqual(expected)
    })

    it("Return an error if removed cohort not found", () => {
        //set up
        cohort.createNewCohort("Cohort-9")
        cohort.createNewCohort("Cohort-10")

        const result = cohort.removeCohort("Cohort-1")
        //verify
        expect(result).toEqual("Cohort not found")
    })

    it("Remove  a student from spesific cohort", () => {
        //set up
        cohort.createNewCohort("Cohort-1")

        cohort.createNewStudent(
            {
                id: 1,
                studentFirstName: "Asiye",
                studentLastName: "Yurtkuran",
                githubUserName: "Asiyeyurtkuran",
                email: "asiyeyurtkuran@gmail.com",
                cohort: "Cohort-1"
            },
            {
                id: 2,
                studentFirstName: "Ceyda",
                studentLastName: "gul",
                githubUserName: "ceydagul",
                email: "ceydagul@gmail.com",
                cohort: "Cohort-1"
            }
        )



        //execute
        cohort.removeStudentFromCohort(1, 'Cohort-1')
        expect(cohort.searchCohort('Cohort-1').getStudents()).toEqual([ {
            id: 1,
            studentFirstName: "Asiye",
            studentLastName: "Yurtkuran",
            githubUserName: "Asiyeyurtkuran",
            email: "asiyeyurtkuran@gmail.com",
            cohort: "Cohort-1"
        }])
        //verify
        expect(result).toEqual(expected)
    })





})