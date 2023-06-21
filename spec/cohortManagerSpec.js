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

    it('should throw an error if the cohort already exists', () => {
        expect(() => {
          cohortManager.createCohort('Cohort A');
        }).toThrowError('Cohort already exists');
      });
    });

    describe('getCohortByName', () => {
        it('should return the cohort with the given name', () => {
          const foundCohort = cohortManager.getCohortByName('Cohort A');
          expect(foundCohort).toBe(cohortA);
        });
    
        it('should return undefined if the cohort is not found', () => {
          const foundCohort = cohortManager.getCohortByName('Nonexistent Cohort');
          expect(foundCohort).toBeUndefined();
        });
      });
    