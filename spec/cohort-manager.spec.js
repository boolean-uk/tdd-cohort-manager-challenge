const {CohortManager} = require('../src/cohort-manager')
const {cohortList}= require('../src/existing-cohort')


describe('COHORT MANAGER', () => {

  let cohortManager ;

  beforeEach(()=>{

    cohortManager = new CohortManager();

  })

  describe('Create , Search a Cohort  with a name, and add a student to a specific cohort', ()=>{
    
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

    it('Can search for a cohort with a cohort name', ()=>{
      //GIVEN
      const cohortName = 'cohort1';

      //WHEN 
      const result = cohortManager.searchCohort(cohortName)

      //THEN
      expect(result).toEqual(cohortList[0])

    })

    
    

    it('Can add a student to a specific cohort', () => {
      // GIVEN
      const foundCohort = cohortList.find(cohort => cohort.name === 'cohort2');
    
      // WHEN
      let addedStudent;
      let studentName;
      let studentAge;
    
      if (foundCohort) {
        const cohortName = 'cohort2';
        studentName = 'Gracial';
        studentAge = 24;
        addedStudent = cohortManager.addStudent(cohortName, studentName, studentAge);


      }
            // THEN
            expect(addedStudent).toBeDefined();
            expect(addedStudent.id).toBeDefined();
            expect(addedStudent.name).toBe(studentName);
            expect(addedStudent.age).toBe(studentAge);
   
    });
    

    it('Can throw an error if cohort not found ',()=>{
      //GIVEN
      const cohortManager = new CohortManager();

      const foundCohort = cohortList.find(cohort=> cohort.name === 'cohort9' )
      if(!foundCohort){
       const result =  cohortManager.addStudent()
        expect(result).toEqual('Cohort not found')
      }
    })

  })
  


})


const foundCohort = cohortList.find(cohort => cohort.name === 'cohort2');
