import Cohort from '../src/cohort/Cohort';
import Manager from '../src/Manager'
import Student from '../src/student/Student';

describe('Manager', () => { 
    const manager = new Manager();

    afterEach(() => {
        manager.reset();
    })

    it('throws error on recreating a manager instance', () => {
        expect(() => {
            new Manager();
        }).toThrow();
    })
    

    it('stores all variables from constructor', () => {
        expect(manager.cohorts).toEqual([]);
        expect(manager.students).toEqual([]);
    })

    it('adds a new cohort', () => {
        const cohort = new Cohort('Cohort 1');
        manager.addCohort(cohort);

        expect(manager.cohorts.includes(cohort)).toBeTrue();
    })

    it('adds new student', () => {
        const studentExpected = new Student(0, 'Jane', 'Doe', 'jdoe', 'jdoe@mail.com')

        const student = manager.registerStudent('Jane', 'Doe', 'jdoe', 'jdoe@mail.com');

        expect(student).toEqual(studentExpected)
    })
 });
