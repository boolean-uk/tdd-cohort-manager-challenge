const CohortManager= require('../src/cohortmanager')
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
        let create = manager.searchAll('CohortPenguin')
        expect(create).toEqual(expected)
    })

      // Test 4
      it('add student to specific cohort', () => {
        const expected =  { cohortname: 'CohortKoala',
         students: [{ "id" : 1, "firstname" : "Kiran", "lastname" : "Gurung","github" : "KinTale", "email" : "email1@email.com" }],
          capacity: 24 }
      
    
        manager.createCohort('CohortKoala')
        let addStudent = manager.addStudents('CohortKoala', 'Kiran', 'Gurung')
        expect(addStudent).toEqual(expected)
       
        console.log('test4', cohort.students)
    })

})