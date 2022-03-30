const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe('Cohort class', () => {
    beforeEach( () => {
        cohort = new Cohort('Cohort 5')
        student = new Student(1, 'John', 'Doe', 'johnnycode', 'johndoe@email.com')
    })

    it('adds student to students list', () => {
        expect(cohort.addStudent(student)).toEqual(student)
        expect(cohort.students).toEqual([student])
    })

    it('adds multiple students to students list', () => {
        cohort.addStudent(student)
        expect(cohort.addStudent(student)).toEqual(student)
        expect(cohort.students.length).toEqual(2)
    })

    it('removes student from students list', () => {
        cohort.addStudent(student)
        expect(cohort.removeStudent(1)).toEqual(student)
        expect(cohort.students.length).toEqual(0)
    })
})