const { Cohort, Student, CohortManager } = require("../src/cohortManager.js");

describe('Cohort Manager', () => {
  let cohortManager;
  let cohortA;
  let student1;
  let student2;
  

  beforeEach(() => {
    cohortManager = new CohortManager();
    cohortA = cohortManager.createCohort('Cohort A');
    student1 = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
    student2 = new Student(2, 'Jane', 'Smith', 'janesmith', 'jane@example.com');
});

describe('createCohort', () => {
    it('should create a new cohort with the given name', () => {
      expect(cohortA.cohortName).toBe('Cohort A');
      expect(cohortManager.cohorts.length).toBe(1);
    });

