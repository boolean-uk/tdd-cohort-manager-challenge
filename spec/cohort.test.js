const Cohort = require('../src/Cohort')
const { studentGenerator } = require('./fake-data')
describe('Cohort', () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort('12')
  })

  it('Should always have a name', () => {
    expect(cohort.name).toBe('12')
    expect(() => new Cohort()).toThrow(Error)
  })

  it('Should have a maximum of 24 students', () => {
    cohort.addStudents(...studentGenerator(30))
    expect(cohort.studentsCount).toBe(24)
  })
})
