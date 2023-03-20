class Cohort {
    constructor() {
        this.cohortID = 0
        this.students = []
        this.cohorts = []
        this.studentID = 0
    }

    createNewCohort(cohortName) {
        this.cohortID++
        const newCohort = { id: this.cohortID, name: cohortName }
        this.cohorts.push(newCohort)
        return newCohort
    }


    createNewStudent() {
        this.studentID++
        const newStudent = {
            id: this.studentID,
            studentFirstName: "Asiye",
            studentLastName: "Yurtkuran",
            githubUserName: "Asiyeyurtkuran",
            email: "asiyeyurtkuran@gmail.com",
            cohort: "Cohort-1"
        }
        this.students.push(newStudent)
        return newStudent
    }

    searchCohort(cohortName) {
        const foundCohort = this.cohorts.find((cohort) => cohort.cohortName === cohortName)
        if (foundCohort === undefined) {
            return "Cohort not found"
        } else
            return [foundCohort]

    }


    removeCohort(name) {
        if (this.findCohort(name) === `Cohort not found`) {
            return 'Cohort not found'
        }

        this.cohorts = this.cohorts.filter((cohort) => cohort.name !== name)
        return this.cohorts
    }

    findCohort(name) {
        const cohort = this.cohorts.find((cohort) => cohort.name === name)
        return cohort === undefined ? `Cohort not found` : cohort
    }

    searchStudentBy(studentID) {
        return this.students.find((student) => student.studentID === studentID)
    }
    // removeStudentFromCohort(studentID) {
    //     const student = this.searchStudentBy(studentID)

    //     if (student.cohortID != null) {
    //         const oldCohort = this.cohorts.indexOf(this.searchStudentBy(student.cohortID))
    //         const oldStudent = this.students.indexOf(this[oldCohort].students.indexOf(student))
    //         this.cohorts[oldCohort].students.splice(oldStudent, 1)
    //     } else return false
    //     student.cohortID = null
    // }

    addStudentToCohort(studentFirstName, studentLastName, githubUserName, email, cohort) {
        this.searchCohort(cohortName).addStudent(
            studentFirstName,
            studentLastName,
            githubUserName,
            email,
            cohort
        )
    }

    removeStudent(studentID) {
        const i = this.students.findIndex((student) => student.id === studentID)
        if (i === -1) {
            throw new Error('Student not found')
        }
        this.students.splice(i, 1)
    }

    removeStudentFromCohort(studentID, cohortName) {
        const cohort = this.searchCohort(cohortName)
        cohort.removeStudent(studentID)
    }

  getStudents() {
    return this.students
  }
}

module.exports = Cohort