// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE

let studentIdCounter = 1
class Student {
    constructor (firstName , lastName, githubUsername, email) {
        this.studentId = String(studentIdCounter++)
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
        // console.log(this.students)
        return student
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

class CohortManager {
    constructor() {
        this.cohorts = []
        this.id = 1
    }

    createCohort(cohortName) {
        const newCohort = new Cohort(this.id, cohortName)
        this.id++
        this.cohorts.push(newCohort)
        console.log(newCohort)
        return newCohort
    }

    searchCohort(cohortName) {
        const findCohort = this.cohorts.find(cohort => cohort.cohortName === cohortName)
        if (findCohort) {
            return findCohort
        }
        else {
            throw new Error('cohort not found')
        }
    }

    addStudentsToCohort(cohortName, student) {
        const cohort = this.searchCohort(cohortName)
        cohort.addStudent(student)
        // this.studentId++
        // console.log(student.lastName)
        return student
    }

    removeCohort(cohortName) {
        const cohortToRemove = this.cohorts.findIndex(c => c.cohortName === cohortName)
        if (cohortToRemove !== -1) {
            this.cohorts.splice(cohortToRemove, 1)
        }
        else {
            throw new Error('cohort does not exist')
        }
    }

    removeStudentFromCohort(cohortName, student) {
        const cohort = this.searchCohort(cohortName)
        cohort.removeStudent(student)
    }

}

export default CohortManager

export { Cohort }

const student1 = new Student('mama', 'leye', 'homonoviscoding', 'mama.leye@gmail.com')
const student2 = new Student('kyle', 'vann', 'kyle', 'kyle.van@gmail.com')
const cohortManager = new CohortManager()
const cohort12 = cohortManager.createCohort('cohort 12')

// const cohort12 = new Cohort('cohort 12')
// cohort12.addStudent(student1)

// cohort1.createCohort('cohort 12')
cohortManager.createCohort('cohort 13')
cohortManager.addStudentsToCohort('cohort 12', student1)
cohortManager.addStudentsToCohort('cohort 12', student2)
cohortManager.addStudentsToCohort('cohort 13', student1)


console.log(cohort12.students)

