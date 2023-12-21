
/* eslint-disable prettier/prettier */
import Student from './Student.js'
class Cohort {
    constructor(cohortName) {
        this.cohortName = cohortName
        this.studentList = [];
    }

    addStudent(firstName, secondName) {
        const student = new Student(firstName, secondName);
        console.log('Account Created Successfully!')
        return this.studentList.push(student);

    
    }

    searchByName(Name) {
        const studentSearched = this.studentList.find((student) => student.firstName === Name)
        return studentSearched
    }


    removeStudent(Name) {
        console.log('isama')
        const foundIndex = this.studentList.findIndex((student) => student.firstName === Name);
        console.log(foundIndex)
        if (foundIndex >= 0) {
            console.log('deleting student');
            this.studentList.splice(foundIndex, 1);
        }
    }
    

    getList() {
        return this.studentList
    }


    
}

export default Cohort
