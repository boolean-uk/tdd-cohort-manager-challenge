/* eslint-disable prettier/prettier */
import Cohortmanager from '../src/Cohortmanager.js'
describe('othello', () => {
    let cohortManager;

    beforeEach(() => {
        cohortManager = new Cohortmanager()
    })

   it('create a new cohort', () => {
        cohortManager.createCohort('class 1')
        expect(cohortManager.cohorts.length).toEqual(1);

   })

   it('search cohort by name!', () => {
        const expected = cohortManager.createCohort('class 20')
        cohortManager.createCohort('class 0')
        const expected2 =  cohortManager.createCohort('class 13')
        cohortManager.createCohort('class 8')
        const result = cohortManager.searchCohortByName('class 20')
        const result2 = cohortManager.searchCohortByName('class 13')
        expect(result).toEqual(expected)
        expect(result2).toEqual(expected2)
    })

    it('remove cohort by name!', () => {
        cohortManager.createCohort('class 2')
        cohortManager.createCohort('class 5')
        cohortManager.createCohort('class 10')
        const result = cohortManager.removeCohortByName('class 5')
        expect(cohortManager.cohorts.length).toEqual(2)
    })

    it('add a student to a specific cohort', () => {
        cohortManager.createCohort('class 1');
        
        const studentFirstName = 'John';
        const studentLastName = 'Doe';
    
        cohortManager.addStudentToSpecificCohort('class 1', studentFirstName, studentLastName);
    
        const cohort = cohortManager.searchCohortByName('class 1');
        const addedStudent = cohort.studentList.find(student => student.firstName === studentFirstName && student.secondName === studentLastName);
    
        expect(addedStudent).toBeDefined();
        expect(addedStudent.firstName).toEqual(studentFirstName);
        expect(addedStudent.secondName).toEqual(studentLastName);
    });

    it('remove student from a specific cohort', () => {
        cohortManager.createCohort('class 5');
        cohortManager.createCohort('class 3');

        const studentFirstName = 'John';
        const studentLastName = 'Doe';

        cohortManager.addStudentToSpecificCohort('class 3', studentFirstName, studentLastName);
        cohortManager.removeStudentFromSpecificCohort('class 3', studentFirstName)
        const cohort = cohortManager.searchCohortByName('class 3');
        const removedStudent = cohort.searchByName(studentFirstName)

        expect(removedStudent).toBeUndefined()
        expect(cohort.studentList).toEqual([])
    })

    it('get the full cohort list', () => {
        cohortManager.createCohort('class 5');
        cohortManager.createCohort('class 3');
        cohortManager.createCohort('class 5');
        cohortManager.createCohort('class 3');

       const listOfCohort =  cohortManager.getfullList()
       expect(listOfCohort.length).toEqual(4)
    })

})
