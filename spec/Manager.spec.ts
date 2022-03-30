import Cohort from '../src/cohort/Cohort';
import Manager from '../src/Manager'
import Student from '../src/student/Student';
import ManagerUtils from '../src/utils/ManagerUtils';

describe('Manager', () => { 
    const manager = Manager.getInstance();

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

    it('finds a student with the options object', () => {
        const studentExpected = new Student(0, 'Jane', 'Doe', 'jdoe', 'jdoe@mail.com')

        manager.registerStudent('Jane', 'Doe', 'jdoe', 'jdoe@mail.com');

        const studentFound = ManagerUtils.findStudent({id: 0})
        const studentNotFound = ManagerUtils.findStudent({id: 1})
        expect(studentFound).toEqual(studentExpected);
        expect(studentNotFound).toEqual(undefined);
    })
 });
