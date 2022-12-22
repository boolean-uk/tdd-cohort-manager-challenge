const Cohort = require('../src/Cohort')
const Student = require('../src/student')

describe('Cohort', () => {
  beforeEach(() => {
    cohort = new Cohort()
  })

  it('Should return a Cohort name, student list as an array and a cohort id', () => {
    // set up
    const expected = {
      cohortName: '',
      students: [],
      id: 1
    }
    // exucute
    const result = cohort.newCohort()

    // verify
    expect(result).toEqual(expected)
  })
})
