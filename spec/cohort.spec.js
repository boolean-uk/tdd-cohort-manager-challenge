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
        cohortManager.removeCohortByName('class 5')
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
        cohortManager.createCohort('class 4');
        cohortManager.createCohort('class 6');
        cohortManager.createCohort('class 2');

       const listOfCohort =  cohortManager.getfullList()
       expect(listOfCohort.length).toEqual(4)
    })


    it("search student by it id", () => {
        cohortManager.createCohort('class 5');
        cohortManager.createCohort('class 3');

        const studentFirstName = 'John';
        const studentLastName = 'Doe';

        cohortManager.addStudentToSpecificCohort('class 3', studentFirstName, studentLastName);
        cohortManager.addStudentToSpecificCohort('class 3', 'mikel', 'yvhbjnbvgh');
        cohortManager.addStudentToSpecificCohort('class 3', 'dusijh', 'ibrahim');

        const result1 = cohortManager.searchStudentById('class 3', 2)
        const result2 = cohortManager.searchStudentById('class 3', 3)

        if (result1) {
            expect(result1.firstName).toEqual('mikel');
        }

        if (result2) {
            expect(result2.firstName).toEqual('dusijh');
        }
    })


    it('cohort cant have more than 24 students', () => {
        const cohort = cohortManager.createCohort('class 3');
        for (let i = 0; i < 26; i++) {
            try {
                cohortManager.addStudentToSpecificCohort('class 3', `student${i}`, `lastname${i}`);
            } catch (error) {
            }
        }
    
        const studentList = cohort.getList();
        expect(studentList.length).toBe(24);
    });


    it('check if the cohort already exist before adding', () => {
        cohortManager.createCohort('class 5');

        expect(() => {
            cohortManager.createCohort('class 5');
          }).toThrowError(/Cohort with the same name already exists/);
    })

    it('the same student cant be add to multiple cohort!', () => {
        const cohortA = cohortManager.createCohort('cohort A');
        const cohortB = cohortManager.createCohort('cohort B');
        cohortManager.addStudentToSpecificCohort('cohort A', 'usama', 'ibrahim')
        cohortManager.addStudentToSpecificCohort('cohort B', 'usama', 'ibrahim')

        expect(cohortA.studentList.length).toEqual(1)
        expect(cohortB.studentList.length).toEqual(0)
    })

    it('a stduent cant be removed from a cohort if it wasnt present at the first place!', () => {

    })

    it('search student by first and last name and return all matching names', () => {
        cohortManager.createCohort('cohort A')
        cohortManager.createCohort('class B')
        cohortManager.createCohort('cohort C')

        cohortManager.addStudentToSpecificCohort('cohort A', 'usama', 'ibrahim')
        cohortManager.addStudentToSpecificCohort('cohort C', 'uhh', 'ibrahim')
        cohortManager.addStudentToSpecificCohort('class B', 'mikel', 'lanre' )

        const result =  cohortManager.searchForStudentByName('usama', 'ibrahim')
        expect(result.length).toEqual(2)
    })

    

})
