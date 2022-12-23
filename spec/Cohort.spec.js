const Cohort = require('../src/Cohort')

describe('Cohort', () => {
  it('Should hold a list of students as a cohort group/class', () => {
    const addCohort = new Cohort('Cohort')

    expect(addCohort).toBeInstanceOf(Cohort)
  })
})
