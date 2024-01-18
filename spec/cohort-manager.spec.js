const {CohortManager} = require('../src/cohort-manager')
const {cohortList}= require('../src/existing-cohort')


describe('COHORT MANAGER', () => {

  let cohortManager ;

  beforeEach(()=>{

    cohortManager = new CohortManager();

  })

  describe('Create a Cohort with a name', ()=>{
    
    it('Can Create a cohort with a cohort name', ()=>{
      //GIVEN
        const newCohort = 'cohort8'

        //WHEN
        const result = cohortManager.create(newCohort)

        //THEN 
        expect(result).toEqual({
          name: 'cohort8',
          students : []
        })
    })
  })
  


})
