import Cohort from './Cohort.js';

class CohortManager {
    constructor() {
        this.cohorts = [];
    }

    createCohort(name) {
        if (!name) {
            throw new Error('Cohort name is required');
        }
        if (this.cohorts.some(cohort => cohort.name === name)) {
            throw new Error('Cohort name must be unique');
        }
        const cohort = new Cohort(name);
        this.cohorts.push(cohort);
        return cohort;
    }

    searchCohort(name) {
        return this.cohorts.find(cohort => cohort.name === name);
    }

    addStudentToCohort(cohortName, student) {
        const cohort = this.searchCohort(cohortName);
        if (!cohort) {
            throw new Error('Cohort not found');
        }
        cohort.addStudent(student);
    }

    removeCohort(name) {
        const index = this.cohorts.findIndex(cohort => cohort.name === name);
        if (index === -1) {
            throw new Error('Cohort not found');
        }
        this.cohorts.splice(index, 1);
    }

    removeStudentFromCohort(cohortName, studentID) {
        const cohort = this.searchCohort(cohortName);
        if (!cohort) {
            throw new Error('Cohort not found');
        }
        cohort.removeStudent(studentID);
    }

    searchStudentByID(studentID) {
        for (const cohort of this.cohorts) {
            const student = cohort.students.find(student => student.studentID === studentID);
            if (student) {
                return student;
            }
        }
        return null;
    }

    searchStudentsByName(firstName, lastName) {
        let students = [];
        for (const cohort of this.cohorts) {
            students = students.concat(cohort.students.filter(student => student.firstName === firstName && student.lastName === lastName));
        }
        return students;
    }
}

export default CohortManager;
