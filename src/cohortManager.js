import Cohort from './cohort.js';

class CohortManager {
  constructor() {
    this.cohorts = [];
    this.students = [];
  }

  createCohort(name) {
    if (!name) {
      throw new Error('Cohort name is required');
    }
    if (this.cohorts.find(cohort => cohort.name === name)) {
      throw new Error('Cohort name already exists');
    }
    const cohort = new Cohort(name);
    this.cohorts.push(cohort);
  }

  searchCohort(name) {
    const cohort = this.cohorts.find(cohort => cohort.name === name);
    if (!cohort) {
      throw new Error('Cohort not found');
    }
    return cohort;
  }

  addStudentToCohort(cohortName, student) {
    const cohort = this.searchCohort(cohortName);
    if (cohort.students.length >= 24) {
      throw new Error('Cohort is full');
    }
    if (this.students.find(stu => stu.id === student.id)) {
      throw new Error('Student already in a cohort');
    }
    cohort.addStudent(student);
    this.students.push(student);
  }

  removeCohort(name) {
    this.cohorts = this.cohorts.filter(cohort => cohort.name !== name);
  }

  removeStudentFromCohort(cohortName, studentId) {
    const cohort = this.searchCohort(cohortName);
    const studentIndex = cohort.students.findIndex(student => student.id === studentId);
    if (studentIndex === -1) {
      throw new Error('Student not found in cohort');
    }
    cohort.students.splice(studentIndex, 1);
    this.students = this.students.filter(student => student.id !== studentId);
  }

  searchStudentById(studentId) {
    return this.students.find(student => student.id === studentId);
  }

  searchStudentsByName(name) {
    return this.students.filter(student => student.firstName === name || student.lastName === name);
  }
}

export default CohortManager;
