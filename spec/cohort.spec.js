const CohortManager = require('../src/cohortmanager')
const Cohort = require('../src/cohort')
describe('cohortManager', () => {
    let manager
    let cohort
    beforeEach(() => {
        manager = new CohortManager();
        cohort = new Cohort();
    });
    //TEST 1
    it('student by ID', () => {
        const expected = {
            "id": 1,
            "firstname": "Kiran",
            "lastname": "Gurung",
            "github": "KinTale",
            "email": "email1@email.com"
        }
        // SET UP
        let getStudent = cohort.getStudentById(1)
        expect(getStudent).toEqual(expected)
    })

    //TEST 2
    it('add student to specific cohort', () => {
        const expected = 'Student successfully added to CohortKoala'
        // SET UP
        manager.createCohort('CohortKoala')
        let addStudent = cohort.addStudent('CohortKoala', 1)
        expect(addStudent).toEqual(expected)
    })

    //TEST 3
    fit('return error if student doesnt exist', () => {
        const expected = 'Student not found.'
        // SET UP
        manager.createCohort('CohortKoala')
        cohort.addStudent('CohortKoala', 1)
        let removeCohort = cohort.getStudentById(45)
        expect(removeCohort).toEqual(expected)
    })


})