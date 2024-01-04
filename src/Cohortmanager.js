/* eslint-disable prettier/prettier */
import Cohort from "./Cohort.js"

class CohortManager {
    constructor() {
        this.cohorts = []
        this.allStudent = []
    }

    createCohort(cohortName) {
        const foundCohort =  this.cohorts.find((cohort) => cohort.cohortName  === cohortName)
        if(!foundCohort) {
            const chort = new Cohort(cohortName)
            this.cohorts.push(chort)
            return chort
        } else {
            throw new Error('Cohort with the same name already exists!');
        }
        
    }

    searchCohortByName(cohortName) {
        const foundCohort =  this.cohorts.find((cohort) => cohort.cohortName  === cohortName)
        if(!foundCohort) {
            throw new Error('Cohort cant be found!')
        }
        return foundCohort
    }

    removeCohortByName(cohortName) {
        const foundIndex = this.cohorts.findIndex((cohort) => cohort.cohortName  === cohortName)
        if(foundIndex === -1) {
            throw new Error('Student cant be found!')

        } 
        this.cohorts.splice(foundIndex, 1)
    }


    addStudentToSpecificCohort(cohortName, firstName, secondName) {
        const existingStudent = this.allStudent.find(
            student => student.firstName === firstName && student.secondName === secondName
        );


        if (existingStudent) {
            return `student already exist in ${existingStudent.cohortName}`
        }

        const studentCohort = this.cohorts.find((cohort) => cohort.cohortName === cohortName )
        if (!studentCohort) {
            throw new Error('Cohort cant be found!')
        } 

        const student = {cohortName, firstName, secondName}
        studentCohort.addStudent(firstName, secondName);
        this.allStudent.push(student)
    }


    removeStudentFromSpecificCohort(cohortName, Name) {
        const studentCohort = this.cohorts.find((cohort) => cohort.cohortName === cohortName )
        
        if(studentCohort) {
            const removedstudent = studentCohort.removeStudent(Name)
            if(!removedstudent) {
                console.log('it cant be removed cause student doesnbt exist')
                return
            }
           return removedstudent
        } else {
            return 'cohort cant be found'
        }
    }


    getfullList() {
        return this.cohorts
    }


    searchStudentById(cohortName, studentId) {
        const studentCohort = this.cohorts.find((cohort) => cohort.cohortName === cohortName )
        if(studentCohort) {
            return studentCohort.searchStudentById(studentId)
        } else {
            throw new Error('student cant be found!')
        }
    }

    searchForStudentByName(firstName, secondName) {
        return this.allStudent.filter((student) => student.firstName === firstName || student.secondName === secondName)
    }

}


export default CohortManager


