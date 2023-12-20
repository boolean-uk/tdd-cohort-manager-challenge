// import CohortList from '../src/Cohort'
// import Student from '../src/Student'

describe('Cohort', () => {
  it('test', () => {
    expect(true).toBeTrue()
  })

  // let cohortList
  // beforeEach(() => {
  //   cohortList = new CohortList()
  // })
  // // Create Cohort
  // it('Name is not empty: should return object of created cohort', () => {
  //   const expected = { id: 1, name: 'Cohort 1', studentsList: [] }
  //   const res = cohortList.createCohort('Cohort 1')
  //   expect(res.id).toEqual(expected.id)
  //   expect(res.name).toEqual(expected.name)
  //   expect(res.studentsList).toEqual(expected.studentsList)
  // })
  // it('Name is empty: Thrown error', () => {
  //   const expect = 'Enter name for create nwe cohort'
  //   const res = cohortList.createCohort('')
  //   expect(res).toThrowError(expect)
  // })
  // // Search Cohort By Cohort Name
  // it('Cohort with entered name exist: Object of searched cohort', () => {
  //   const expected = { id: 2, name: 'Cohort 2', studentsList: [] }
  //   cohortList.createCohort('Cohort 1')
  //   cohortList.createCohort('Cohort 2')
  //   cohortList.createCohort('Cohort 3')
  //   const res = cohortList.getCohortByName('Cohort 2')
  //   expect(res.id).toEqual(expected.id)
  //   expect(res.name).toEqual(expected.name)
  //   expect(res.studentsList).toEqual(expected.studentsList)
  // })
  // it("Cohort with entered name doesn't exist: Thrown error", () => {
  //   const expected = 'Cohort not Found'
  //   const res = cohortList.getCohortByName('Cohort 1')
  //   expect(res).toThrowError(expected)
  // })
  // // Add Student to a Specific Cohort
  // it('Cohort with entered name exist: List of students of entered cohort', () => {
  //   const student1 = new Student(
  //     1,
  //     'Nazar',
  //     'Tymiv',
  //     'NazarTymiv',
  //     'hello1@gmail.com'
  //   )
  //   const student2 = new Student(
  //     2,
  //     'Name 2',
  //     'Last Name 2',
  //     'GitHub Name 2',
  //     'hello2@gmail.com'
  //   )
  //   cohortList.createCohort('Boolean')
  //   const expected = [
  //     {
  //       studentID: 1,
  //       firstName: 'Nazar',
  //       lastName: 'Tymiv',
  //       githubName: 'NazarTymiv',
  //       email: 'hello1@gmail.com'
  //     },
  //     {
  //       studentID: 2,
  //       firstName: 'Name 2',
  //       lastName: 'Last Name 2',
  //       githubName: 'GitHub Name 2',
  //       email: 'hello2@gmail.com'
  //     }
  //   ]
  //   cohortList.addStudent(student1, 'Boolean')
  //   const res = cohortList.addStudent(student2, 'Boolean')
  //   expect(res).toEqual(expected)
  // })
  // it("Cohort with entered name doesn't exist: Thrown error", () => {
  //   const expected = 'Cohort not Found'
  //   const student = new Student(
  //     1,
  //     'Nazar',
  //     'Tymiv',
  //     'NazarTymiv',
  //     'hello1@gmail.com'
  //   )
  //   const res = cohortList.addStudent(student, 'Boolean')
  //   expect(res).toThrowError(expected)
  // })
  // // Remove Cohort
  // it('Cohort with entered name exist: Removed cohort', () => {
  //   const expected = { id: 2, name: 'Cohort 2', studentsList: [] }
  //   cohortList.createCohort('Cohort 1')
  //   cohortList.createCohort('Cohort 2')
  //   cohortList.createCohort('Cohort 3')
  //   const res = cohortList.removeCohort('Cohort 2')
  //   expect(res).toEqual(expected)
  //   expected(cohortList.list.length).toEqual(2)
  // })
  // it("Cohort with entered name doesn't exist", () => {
  //   const expected = 'Cohort not Found'
  //   const res = cohortList.removeCohort('Cohort 1')
  //   expect(res).toThrowError(expected)
  // })
  // // Remove Student
  // it('Student exist in entered cohort: Removed student', () => {
  //   const expected = {
  //     studentID: 1,
  //     firstName: 'Nazar',
  //     lastName: 'Tymiv',
  //     githubName: 'NazarTymiv',
  //     email: 'hello1@gmail.com'
  //   }
  //   const student1 = new Student(
  //     1,
  //     'Nazar',
  //     'Tymiv',
  //     'NazarTymiv',
  //     'hello1@gmail.com'
  //   )
  //   const student2 = new Student(
  //     2,
  //     'Name 2',
  //     'Last Name 2',
  //     'GitHub Name 2',
  //     'hello2@gmail.com'
  //   )
  //   cohortList.createCohort('Boolean')
  //   cohortList.addStudent(student1, 'Boolean')
  //   cohortList.addStudent(student2, 'Boolean')
  //   const res = cohortList.removeStudent(2, 'Boolean')
  //   expect(res).toEqual(expected)
  //   expect(cohortList.list[0].studentsList.length).toEqual(1)
  //   expect(cohortList.list[0].studentsList[0]).toEqual(student1)
  // })
  // it("Student doesn't exist in entered cohort: Thrown error", () => {
  //   const expected = 'Student not Found'
  //   cohortList.createCohort('Boolean')
  //   const res = cohortList.removeStudent(1, 'Boolean')
  //   expect(res).toThrowError(expected)
  // })
  // it("Cohort doesn't exist: Thrown error", () => {
  //   const expected = 'Cohort not Found'
  //   const student1 = new Student(
  //     1,
  //     'Nazar',
  //     'Tymiv',
  //     'NazarTymiv',
  //     'hello1@gmail.com'
  //   )
  //   cohortList.createCohort('Cohort 1')
  //   cohortList.addStudent(student1, 'Cohort 1')
  //   const res = cohortList.removeStudent(1, 'Boolean')
  //   expect(res).toThrowError(expected)
  //   expect(cohortList.list[0].studentsList[0]).toEqual(student1)
  // })
})
