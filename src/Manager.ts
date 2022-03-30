import Cohort from "./cohort/Cohort";
import Student from "./student/Student";

export default class Manager {
 
    private studentId = 0;

    cohorts : Cohort[];
    students : Student[];

    static instance : Manager;
    static getInstance() {
        return Manager.instance ?? new Manager(); 
    }

    constructor() {
        if(Manager.instance) {
            throw new Error("Cannot create more than one instance of Manager");
        }
        Manager.instance = this;
        this.cohorts = [];
        this.students = [];
 
    }

    addCohort(cohort : Cohort) {
                // TODO: Implement find method
        this.cohorts.push(cohort);
    }

    registerStudent(firstName : string, lastName: string, githubUsername: string, email: string) : Student {
        // TODO: Implement find method
        const student = new Student(this.studentId, firstName, lastName, githubUsername, email);
        this.students.push(student);
        return student;
    }


    reset() {
        this.cohorts = [];
        this.students = [];
    }
}

