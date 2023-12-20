
class Cohort {
    constructor() {
        this.cohortList = []
    }

    createCohort(cohortName) {
        const newCohort = {name: cohortName, students: [], capacity: 24}
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)
        
        if(findCohort) {
            throw new Error('This Cohort already exists, please choose another name!')
        }
        if (!cohortName) {
            throw new Error('Please give a name to your class!')
        }
        if(this.cohortList.length > this.capacity) {
            throw new Error("Cohort list is full, please create another list!")
        } else {
            this.cohortList.push(newCohort)
        }

        return this.cohortList
    }

    searchCohort(cohortName) {
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)

        if (!findCohort) {
            throw new Error("Cohort not found")
        }

        return findCohort
    }

    addStudent(cohortName, studentToAdd) {
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)
        const studentExists = findCohort.students.find(student => student.studentID === studentToAdd.studentID)

        if(studentExists) {
            throw new Error("this student already exists, add another student!")
        }

        for(let i = 0; i < findCohort.students.length; i++) {
            if( studentToAdd.userName === findCohort.students[i].userName ) {
                throw new Error("this student already enrolled in another Cohort!")
            }
        }
       
        findCohort.students.push(studentToAdd)
      
        return findCohort.students       
    }
}


export default Cohort