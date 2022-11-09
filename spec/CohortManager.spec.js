const CohortManager = require('../src/CohortManager.js')

/*
- Create a cohort with a cohort name - DONE
- Search for a cohort by cohort name - DONE
- Add student to a specific cohort - DONE
- Remove a cohort by cohort name - DONE
- Remove student from a specific cohort - DONE
- Throw errors if student or cohort not found - DONE
*/

describe('CohortManager Class', () => {
  let Manager
  beforeEach(() => {
    Manager = new CohortManager()
  })

  it('Creates a cohort with a cohort name', () => {
    const result = Manager.createCohort('Cohort 7')
    expect(result).toEqual([
      {
        name: 'Cohort 7',
        cohortCapacity: 15,
        studentList: []
      }
    ])
    expect(() => Manager.createCohort(7)).toThrow(
      new TypeError(`${7} must be a string`)
    )
  })

  it('Searches for a cohort with a cohort name', () => {
    Manager.createCohort('Cohort 7')
    const resultFullString = Manager.searchForCohort('Cohort 7')
    const resultSubString = Manager.searchForCohort('7')
    expect(resultFullString).toEqual({
      name: 'Cohort 7',
      cohortCapacity: 15,
      studentList: []
    })
    expect(resultSubString).toEqual({
      name: 'Cohort 7',
      cohortCapacity: 15,
      studentList: []
    })
    expect(() => Manager.searchForCohort(7)).toThrow(
      new TypeError(`${7} is not a string, must search for a string`)
    )
    expect(() => Manager.searchForCohort('Cohort 8')).toThrow(
      new Error('no match found')
    )
  })

  it('Removes a cohort', () => {
    Manager.createCohort('Cohort 6')
    Manager.createCohort('Cohort 7')
    const result = Manager.removeCohort('CoHoRt 7')
    expect(result).toEqual('Removed successfully')
    expect(Manager.cohortList.length).toBe(1)
    expect(() => Manager.removeCohort(7)).toThrow(
      new TypeError(`must be a string`)
    )
    expect(() => Manager.removeCohort('Cohort 8')).toThrow(
      new Error('no match found')
    )
  })

  it('Adds a student to a cohort', () => {
    Manager.createCohort('Cohort 7')
    const newStudent = Manager.createStudent(
      'Nathan',
      'King',
      'vherus',
      'GRRMfan123@gmail.com'
    )
    const result = Manager.addStudentToCohort(newStudent, 'Cohort 7')
    expect(result).toBe('Nathan added to Cohort 7 successfully')
    expect(Manager.cohortList[0].studentList.length).toBe(1)
  })

  it('Removes a student from a cohort', () => {
    Manager.createCohort('Cohort 7')
    const newStudent = Manager.createStudent(
      'Nathan',
      'King',
      'vherus',
      'GRRMfan123@gmail.com'
    )
    const wrongStudent = Manager.createStudent(
      'Alex',
      'Lind',
      'AlexLind',
      'ASOIAF1337@gmail.com'
    )
    Manager.addStudentToCohort(newStudent, 'Cohort 7')
    const result = Manager.removeStudentFromCohort(newStudent, 'Cohort 7')
    expect(result).toBe('Nathan removed from Cohort 7 successfully')
    expect(Manager.cohortList[0].studentList.length).toBe(0)
    expect(() =>
      Manager.removeStudentFromCohort(wrongStudent, 'Cohort 7').toThrow(
        new Error('student does not exist')
      )
    )
  })
})
