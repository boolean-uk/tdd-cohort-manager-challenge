
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

    searchStudent(cohortName, userName) {
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)
        const findStudent = findCohort.students.find(student => student.userName === userName)

        if (!findStudent) throw new Error("Student not found")

        return findStudent
    }

    addStudent(cohortName, studentToAdd) {
        const findCohort = this.cohortList.find(cohort => cohort.name === cohortName)
        const studentExists = findCohort.students.find(student => student.studentID === studentToAdd.studentID)

        if(studentExists) {
            throw new Error("this student already exists, add another student!")
        }

        for(let i = 0; i < this.cohortList.length; i++) {
            for(let j = 0; j < this.cohortList[i].students.length; j++) {
                if( studentToAdd.userName === this.cohortList[i].students[j].userName ) {
                    return "this student already enrolled in another Cohort!"
                }
            }
        }
       
        if(findCohort.students.length > findCohort.capacity){
            throw new Error("Cohort is full, student cannot be added!")
        } 
        findCohort.students.push(studentToAdd)
      
        return findCohort.students       
    }
}


// const cohort = new Cohort()
// console.log(cohort.createCohort('Cohort 1'))
// console.log(cohort.searchCohort('Cohort 1'))
// cohort.addStudent('Cohort 1', {
//     studentID: 1,
//     fitrstName: 'John',
//     lastName: 'Doe',
//     userName: 'JohnDoe',
//     email: 'johnDoe@gmail.com'
// })
// console.log(cohort.searchStudnet('Cohort 1', 'JohsanDoe'))

export default Cohort