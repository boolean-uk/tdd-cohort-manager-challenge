// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE
class CohortManager {
    constructor() {
        this.cohorts = []
    }

    createCohort(cohortName) {
        const newCohort = new Cohort(1, cohortName)
        this.cohorts.push(newCohort)
    }

    searchCohort(cohortName) {

    }

    addStudentsToCohort(cohortName, student) {

    }

    removeCohort(cohortName) {

    }

    removeStudentFromCohort(student) {

    }

}

class Student {
    constructor (studentId, firstName, lastName, githubUsername, email) {
        this.studentId = studentId
        this.firstName = firstName
        this.lastName = lastName
        this.githubUsername = githubUsername
        this.email = email
    }
}

class Cohort {
    constructor(id, cohortName) {
        this.id = id
        this.cohortName = cohortName
        this.students = []
    }

    addStudent(student) {
        this.students.push(student)
    }

    removeStudent(studentId) {
        const index = this.students.findIndex(student => student.studentId === studentId)

        if (index !== -1) {
            this.students.splice(index, 1)
        }
        else {
            throw new Error('student not found')
        }
    }
}

export default CohortManager

export { Cohort }