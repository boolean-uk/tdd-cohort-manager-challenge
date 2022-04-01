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

    it("Max capacity reached when trying to add students", () => {
        // setup
        const cohort = new Cohort()
        const student1 = new Student(1,'Student One', 'email@email.com')
        const student2 = new Student(2,'Student Two', 'email2@email.com')
        const student3 = new Student(3,'Student Three', 'email3@email.com')
        const student4 = new Student(4,'Student Four', 'email4@email.com')


        // execute
        cohort.add(student1)
        cohort.add(student2)
        cohort.add(student3)
        studentsInCohort = [student1, student2, student3]

        const canNotAddStudent = cohort.add(student4)
        const maxMessage = 'Cohort at full capacity'
        // verify
        expect(studentsInCohort).toEqual(cohort.students)
        expect(canNotAddStudent).toEqual(maxMessage)
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