const CohortManager = require("../src/cohortmanager.js")
const Student = require("../src/student")

describe("CohortManager",() =>{
     let cohortManager
     const studOne = new Student(1,"Sean","Richards","SeanRich","sean@outlook.com");
     
     beforeEach(() => {
    cohortManager = new CohortManager();
     });

    
//     //Test 1 Create a cohort
    
    it("Create a cohort",() => {
    //set up
    const expected = ["Cohort 1"]
    //execute 
    const result = cohortManager.createCohort("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  }); 
//   //Test 2 Searchs Cohorts 
  
  it("Search cohorts by name and return the result", () => {
    //setup 
    const expected = "Cohort 5"
    //execute 
    cohortManager.createCohort("Cohort 1")
    cohortManager.createCohort("Cohort 3")
    cohortManager.createCohort("Cohort 5")
    const result = cohortManager.searchCohort("Cohort 5");
    //verify
    expect(result).toEqual(expected);
  });
 //Return an error message 
 
  it("can search cohorts by name and returns an error if not found", () => {
    //setup 
    const expected = "Cohort doesn't exist"
    //execute 
    cohortManager.createCohort("Cohort 1")
    const result = cohortManager.searchCohort("Cohort Alpha");
    //verify
    expect(result).toEqual(expected);
  });
  
  // Test 3 Adding Student to Cohort
  it("Creates new student", () => {
    //setup 
    const expected = studOne
    //execute 
    const result = cohortManager.createStudent(expected);
    //verify
    expect(result).toEqual([expected]);
  });
  
  
  it("can add student to cohort by name", () => {
    //setup 
    const expected = ['Cohort 1', studOne]
    //execute 
    cohortManager.createStudent(studOne)
    cohortManager.createCohort("Cohort 1")
    
    
    const result = cohortManager.addStudentToCohort("Cohort 1");
    //verify
    expect(result).toEqual(expected);
  });

})