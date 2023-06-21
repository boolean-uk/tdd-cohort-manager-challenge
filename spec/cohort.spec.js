const CohortManager = require('../src/cohort.js')

describe('CohortManger', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortManager()
  })

  it('Create a new cohort', () => {
    // Given
    const name = 'Cohort 1'
    const expected = [
      {
        cohortName: 'Cohort 1',
        students: []
      }
    ]
    // When
    const res = cohortList.createCohort(name)
    // Then
    expect(res).toEqual(expected)
  })

  it('Search cohort by cohort name', () => {
    // Given
    const name1 = 'Cohort 1'
    const name2 = 'Cohort 2'

    const expected = {
      cohortName: 'Cohort 2',
      students: []
    }
    // When
    cohortList.createCohort(name1)
    cohortList.createCohort(name2)
    const res = cohortList.searchCohort('Cohort 2')
    // Then
    expect(res).toEqual(expected)
  })

  it('Create student for a specific cohort', () => {
    // Given
    const student = {
      firstName: 'Chris',
      lastName: 'Sach',
      gitUserName: 'ChrisJS90',
      email: 'christophersach90@gmail.com'
    }

    const expected = {
      cohortName: 'Cohort 1',
      students: [
        {
          studentId: 1,
          firstName: 'Chris',
          lastName: 'Sach',
          gitUserName: 'ChrisJS90',
          email: 'christophersach90@gmail.com'
        }
      ]
    }
    // When
    cohortList.createCohort('Cohort 1')
    const res = cohortList.createStudent(
      'Cohort 1',
      student.firstName,
      student.lastName,
      student.gitUserName,
      student.email
    )
    // Then
    expect(res).toEqual(expected)
  })

  it('Remove existing cohort', () => {
    // Given
    const name1 = 'Cohort 1'
    const name2 = 'Cohort 2'

    const expected = [
      {
        cohortName: 'Cohort 2',
        students: []
      }
    ]

    // When
    cohortList.createCohort(name1)
    cohortList.createCohort(name2)

    const res = cohortList.removeCohort('Cohort 1')

    // Then
    expect(res).toEqual(expected)
  })
})
