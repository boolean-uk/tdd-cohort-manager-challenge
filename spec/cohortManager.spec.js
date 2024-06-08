import CohortManager from '../src/cohortManager.js';
import Student from '../src/student.js';

describe('CohortManager', () => {
    let manager;

    beforeEach(() => {
        manager = new CohortManager();
    });

    it('should create a cohort with a given name', () => {
        const cohort = manager.createCohort('Cohort 1');
        expect(cohort.name).toBe('Cohort 1');
    });

    it('should find a cohort by name', () => {
        manager.createCohort('Cohort 1');
        const cohort = manager.searchCohort('Cohort 1');
        expect(cohort.name).toBe('Cohort 1');
    });

    it('should add a student to a specific cohort', () => {
        manager.createCohort('Cohort 1');
        const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
        manager.addStudentToCohort('Cohort 1', student);
        const cohort = manager.searchCohort('Cohort 1');
        expect(cohort.students.length).toBe(1);
        expect(cohort.students[0]).toBe(student);
    });

    it('should remove a cohort by name', () => {
        manager.createCohort('Cohort 1');
        manager.removeCohort('Cohort 1');
        expect(manager.searchCohort('Cohort 1')).toBeUndefined();
    });

    it('should remove a student from a specific cohort', () => {
        manager.createCohort('Cohort 1');
        const student = new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com');
        manager.addStudentToCohort('Cohort 1', student);
        manager.removeStudentFromCohort('Cohort 1', 1);
        const cohort = manager.searchCohort('Cohort 1');
        expect(cohort.students.length).toBe(0);
    });

    it('should throw an error if cohort not found', () => {
        expect(() => {
            manager.addStudentToCohort('Nonexistent Cohort', new Student(1, 'John', 'Doe', 'johndoe', 'john@example.com'));
        }).toThrowError('Cohort not found');
    });

    it('should throw an error if student not found in the cohort', () => {
        manager.createCohort('Cohort 1');
        expect(() => {
            manager.removeStudentFromCohort('Cohort 1', 1);
        }).toThrowError('Student not found in this cohort');
    });
});
