import Student from "./student.js";

class Cohort {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
    
    addStudent(firstName, lastName, gitUsername, email) {
        const exists = this.students.some((c) => c.email === email)

        if (!exists) {
            const {...student} = new Student(firstName, lastName, gitUsername, email)
            this.students.push(student)
        }
        return true
    }

}

export default Cohort;