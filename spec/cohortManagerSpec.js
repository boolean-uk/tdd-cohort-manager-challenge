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
    
      describe('addStudentToCohort', () => {
        it('should add a student to the specified cohort', () => {
          cohortManager.addStudentToCohort('Cohort A', student1);
          expect(cohortA.students.length).toBe(1);
          expect(cohortA.students[0]).toBe(student1);
        });
    
        it('should throw an error if the cohort is not found', () => {
          expect(() => {
            cohortManager.addStudentToCohort('Nonexistent Cohort', student1);
          }).toThrowError('Cohort not found');
        });
      });
    
      describe('removeCohort', () => {
        it('should remove the cohort with the given name', () => {
          cohortManager.removeCohort('Cohort A');
          expect(cohortManager.cohorts.length).toBe(0);
        });
    
        it('should throw an error if the cohort is not found', () => {
          expect(() => {
            cohortManager.removeCohort('Nonexistent Cohort');
          }).toThrowError('Cohort not found');
        });
      });

      describe('removeStudentFromCohort', () => {
        beforeEach(() => {
          cohortManager.addStudentToCohort('Cohort A', student1);
          cohortManager.addStudentToCohort('Cohort A', student2);
        });
    
        it('should remove the student from the specified cohort', () => {
          cohortManager.removeStudentFromCohort('Cohort A', 2);
          expect(cohortA.students.length).toBe(1);
          expect(cohortA.students[0]).toBe(student1);
        });
    
        it('should throw an error if the cohort is not found', () => {
          expect(() => {
            cohortManager.removeStudentFromCohort('Nonexistent Cohort', 1);
          }).toThrowError('Cohort not found');
        });
    
        it('should throw an error if the student is not found in the cohort', () => {
          expect(() => {
            cohortManager.removeStudentFromCohort('Cohort A', 3);
          }).toThrowError('Student not found');
        });
      });
    