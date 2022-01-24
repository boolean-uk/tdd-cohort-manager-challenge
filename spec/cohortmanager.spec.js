const CohortManager = require('../src/cohortmanager')
const Cohort = require('../src/cohort')
describe('cohortManager', () => {
    let manager
    let cohort
    beforeEach(() => {
        manager = new CohortManager();
        cohort = new Cohort();
    });

    //Test 1
    it('create a new cohort', () => {
        const expected = [new Cohort('CohortOtter')]

        manager.createCohort('CohortOtter')
        let create = manager.cohorts
        expect(create).toEqual(expected)

    })

    //Test 2
    it('create multiple new cohorts', () => {
        const expected = [new Cohort('CohortOtter'),
        new Cohort('CohortPenguin'),
        new Cohort('CohortWolf'),
        new Cohort('CohortDeer'),
        new Cohort('CohortKoala')]


        manager.createCohort('CohortOtter')
        manager.createCohort('CohortPenguin')
        manager.createCohort('CohortWolf')
        manager.createCohort('CohortDeer')
        manager.createCohort('CohortKoala')
        let create = manager.cohorts
        expect(create).toEqual(expected)
    })

    // Test 3
    it('search for cohort with cohort name', () => {
        const expected = this.cohorts


        manager.createCohort('CohortPenguin')
        let create = manager.searchCohort('CohortPenguin')
        expect(create).toEqual(expected)
        // console.log(manager.cohorts)
    })

    // Test 4
    it('student by ID', () => {
        const expected = [{
            "id": 1,
            "firstname": "Kiran",
            "lastname": "Gurung",
            "github": "KinTale",
            "email": "email1@email.com"
        }]
        let getStudent = manager.getStudentById(1)
        expect(getStudent).toEqual(expected)
    })

    // Test 5
    it('add student to specific cohort', () => {
        const expected = 'Student successfully added to CohortKoala'


        manager.createCohort('CohortKoala')
        let addStudent = manager.addStudent('CohortKoala', 1)
        expect(addStudent).toEqual(expected)

        //console.log('test4', manager.cohorts)
    })

    // Test 6
    it('remove cohort by name', () => {
        const expected = []


        manager.createCohort('CohortDeer')
        let removeCohort = manager.removeCohort('CohortDeer')
        expect(removeCohort).toEqual(expected)

        //console.log('test4', manager.cohorts)
    })

    //Test 7
    it('remove student from specific cohort', () => {
        const expected = manager.cohorts
        /*[
        Cohort {
        cohortname: 'CohortKoala',
        students: [ [Array] ],
        capacity: 24 }]*/

        manager.createCohort('CohortKoala')
        manager.addStudent('CohortKoala', 1)
        manager.addStudent('CohortKoala', 2)
        let removeStudent = manager.removeStudent(2)
        expect(removeStudent).toEqual(expected)

        //console.log('test7', manager.cohorts)
    })

    // Test 8
    it('return error if cohort doesnt exist', () => {
        const expected = 'ERROR : Cohort not found.'


        manager.createCohort('CohortDeer')
        let removeCohort = manager.removeCohort('CohortDog')
        expect(removeCohort).toEqual(expected)

        //console.log('test4', manager.cohorts)
    })

    // Test 9
    it('return error if student doesnt exist', () => {
        const expected = 'Student not found.'


        manager.createCohort('CohortKoala')
        manager.addStudent('CohortKoala', 1)
        let removeCohort = manager.getStudentById(22)
        expect(removeCohort).toEqual(expected)
    })
})