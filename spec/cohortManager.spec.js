const CohortManager = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')

describe ('cohortManager', () => {
  let cohortManager
  let cohort3
  let cohort4
  let cohort5

  beforeEach(() => {
    cohortManager = new CohortManager()
    cohort3 = new Cohort(3)
    cohort4 = new Cohort(4)
    cohort5 = new Cohort(5)
  })

  it('adds a new cohort is added to the cohort list', () => {
    //   setup
    cohortManager.add(cohort5)

    const expected = [cohort5]
    // evaluate
    const result = cohortManager.cohortList
    // verify
    expect(result).toEqual(expected)
  })

  it('searches a specific cohort', () => {
    //   setup

    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = cohort5
    // evaluate
    const result = cohortManager.search('Cohort 5')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns a error for searching a non-existant cohort', () => {
    //   setup
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = 'ERROR – this cohort do not exist'
    // evaluate
    const result = cohortManager.search('Cohort 6')
    // verify
    expect(result).toEqual(expected)
  })

  it('removes specific cohort and returns the cohort list', () => {
    //   setup
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = [cohort3, cohort5]
    // evaluate
    const result = cohortManager.remove('Cohort 4')
    // verify
    expect(result).toEqual(expected)
  })

  it('returns an error for trying to remove a non-existing cohort', () => {
    //   setup
    cohortManager.add(cohort3)
    cohortManager.add(cohort4)
    cohortManager.add(cohort5)

    const expected = 'ERROR – this cohort do not exist'
    // evaluate
    const result = cohortManager.remove('Cohort 6')
    // verify
    expect(result).toEqual(expected)
  })
})
