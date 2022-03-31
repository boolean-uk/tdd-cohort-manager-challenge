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
    })

    it("remove student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        // execute
        cohort.add(student)
        studentIDx = student.studentId
        cohort.remove(studentIDx)
        emptyArray = 0
        // verify
        expect(cohort.students.length).toEqual(emptyArray)
    })

    it("remove specific student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        const student2 =new Student(2, 'Student Two', 'email2@email.com')
        // execute
        cohort.add(student)
        cohort.add(student2)
        studentIDx = student2.studentId
        cohort.remove(studentIDx)
        emptyArray = 1
        // verify
        expect(cohort.students.length).toEqual(emptyArray)
    })

    it("error message when trying to remove student", () => {
        // setup
        const cohort = new Cohort()
        const student = new Student(1,'Student One', 'email@email.com')
        const student2 =new Student(2, 'Student Two', 'email2@email.com')
        // execute
        cohort.add(student)
        // cohort.add(student2)
        studentIDx = student2.studentId
        const removeStudent = cohort.remove(studentIDx)
        emptyArray = 1
        // verify
        expect(removeStudent).toEqual('Student is not in the register')
        expect(cohort.students.length).toEqual(emptyArray)
    })
})