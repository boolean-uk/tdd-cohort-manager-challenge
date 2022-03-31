const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("Cohort", () => {

    it("add student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Mubarak Musse', 'email@email.com')
        // execute
        const addedStudent = cohort.add(student)
        // verify
        expect(addedStudent).toEqual(cohort.students)
    })
})