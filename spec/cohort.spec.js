const Cohort = require("../src/cohort.js");
const Student = require("../src/student.js");

describe("Cohort", () => {

    it("add student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        // execute
        const addedStudent = cohort.add(student)
        // verify
        expect(addedStudent).toEqual(cohort.students)
        // expect(cohort).toEqual(cohort.cohortName)
    })

    it("remove student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        // execute
        cohort.add(student)
        const studentIDx = student.studentId
        const result = cohort.remove(studentIDx)
        const emptyArray = []
        // verify
        expect(result).toEqual(emptyArray)
    })

    it("remove specific student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        const student2 =new Student(2, 'Student Two', 'email2@email.com')
        // execute
        cohort.add(student)
        cohort.add(student2)

        const studentIDx = student2.studentId
        result = cohort.remove(studentIDx)
        emptyArray = [student]
        
        // verify
        expect(result).toEqual(emptyArray)
    })

    it("error message when trying to remove student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        const student2 =new Student(2, 'Student Two', 'email2@email.com')
        // execute
        result = cohort.add(student)
        // cohort.add(student2)
        const studentIDx = student2.studentId
        const removeStudent = cohort.remove(studentIDx)
        emptyArray = [student]
        // verify
        expect(removeStudent).toEqual('Student is not in the register')
        expect(result).toEqual(emptyArray)
    })
})