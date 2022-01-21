const Cohort = require('./cohort.js')
const Student = require('./student.js')

class CohortManager {
    constructor() {
        this.cohorts = []
        this.studentID = 1
    }

    addCohort(cohortName) {
        for(let i = 0; i < this.cohorts.length; i++) {
            let cohort = this.cohorts[i]
            if(cohort.checkCohortName(cohortName)) {
                return "There is already a cohort with the same name"
            }
        }
        const cohort = new Cohort(cohortName)
        this.cohorts.push(cohort)
    }

    removeCohort(cohortName) {
        for(let i = 0; i < this.cohorts.length; i++) {
            let cohort = this.cohorts[i]
            if(cohort.checkCohortName(cohortName)) {
                this.cohorts.splice(i,1)
                return "Removed"
            }
        }
        return "Cohort does not exist"
    }

    addStudent(cohortName, first, last, github, email) {
        // check all students to see if exist in data base. if so return error message and do not add
        

        for(let i = 0; i < this.cohorts.length; i++) {
            let cohort = this.cohorts[i]
            if(cohort.checkCohortName(cohortName)) {
                if(cohort.students.length >= 24) {
                    return "Cohort is full"
                }
                cohort.addStudentToCohort(this.studentID, first, last, github, email)
                this.studentID += 1
                return "Student Added"
            }
        }
        return "Cohort does not exist"
    }

    removeStudent(cohortName, id) {
        if(this.cohorts.filter(x => x.name === cohortName).length === 0) {
            return "Cohort does not exist"
        }

        for(let i = 0; i < this.cohorts.length; i++) {
            let cohort = this.cohorts[i]
            if(cohort.checkCohortName(cohortName)) {
                for(let j = 0; j < cohort.students.length; j++) {
                    let student = cohort.students[j]
                    if(student.checkID(id)) {
                cohort.removeStudentFromCohort(id)
                return "Student Removed"
            }
        }
    }
    }
        return "Student ID not found"
    }

    searchByCohort(cohortName) {
        for(let i = 0; i < this.cohorts.length; i++) {
            let cohort = this.cohorts[i]
            if(cohort.checkCohortName(cohortName)) {
                return cohort
            }
        }
        return "Cohort does not exist"

    }

    searchByProperty(property, value) {
        let studentsWithThisProperty= []
        for(let i = 0; i < this.cohorts.length; i++) {
            let cohort = this.cohorts[i]
                for(let j = 0; j < cohort.students.length; j++) {
                    let student = cohort.students[j]
                    if(student[property] === value) {
                        studentsWithThisProperty.push(student)
            }
        }
    }
        return studentsWithThisProperty
    }

    searchByID(id) {
        return this.searchByProperty("id", id).length > 0 
        ? this.searchByProperty("id", id)[0] 
        : "Student ID not found"
    }

    searchStudentsByFirstname(first) {
        return this.searchByProperty("firstname", first)
    }


    searchStudentsByLastname(last) {
        return this.searchByProperty("lastname", last)
    }
}

module.exports = CohortManager