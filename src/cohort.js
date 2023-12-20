
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
            console.log('i', findCohort.students[i])
            if(
                studentToAdd.fitrstName === findCohort.students[i].fitrstName &&
                studentToAdd.lastName === findCohort.students[i].lastName &&
                studentToAdd.userName === findCohort.students[i].userName && 
                studentToAdd.email === findCohort.students[i].email
            ) {
                throw new Error("this student already enrolled in another Cohort!")
            }
        }
       
        findCohort.students.push(studentToAdd)
      
        return findCohort.students
        
    }
}

const cohort = new Cohort()
cohort.createCohort('Cohort 1')
cohort.addStudent('Cohort 1', {
    studentID: 1,
    fitrstName: 'John',
    lastName: 'Doe',
    userName: 'JohnDoe',
    email: 'johnDoe@gmail.com'
})
cohort.addStudent('Cohort 1', {
    studentID: 2,
    fitrstName: 'sas',
    lastName: 'ds',
    userName: 'asd',
    email: 'johnDsaoe@gmail.com'
})
cohort.createCohort('Cohort 2')
cohort.addStudent('Cohort 2', {
    studentID: 1,
    fitrstName: 'cs',
    lastName: 'def',
    userName: 'cc',
    email: 'swww@gmail.com'
})
console.log('Students List', cohort.cohortList[0].students)
console.log('Students List', cohort.cohortList[1].students)

export default Cohort