/* eslint-disable prettier/prettier */
import Student from './Student.js'
class Cohort {
    constructor(cohortName) {
        this.cohortName = cohortName
        this.studentList = [];
    }


    addStudent(firstName, secondName) {
        if(this.studentList.length < 24) {
            const student = new Student(firstName, secondName);
            return this.studentList.push(student);
        } 
    }


    searchByName(Name) {
        const studentSearched = this.studentList.find((student) => student.firstName === Name)
        return studentSearched
    }


    removeStudent(Name) {
        const foundIndex = this.studentList.findIndex((student) => student.firstName === Name);
        if (foundIndex >= 0) {
            this.studentList.splice(foundIndex, 1);
            return true
        }
        return false
    }
    

    searchStudentById(studentId) {
        return this.studentList.find((student) => student.id === studentId)
    }


    getList() {
        return this.studentList
    }


    
}

export default Cohort
