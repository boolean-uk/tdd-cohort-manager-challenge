describe('Cohort Manager', () => {
  let cohortList

  beforeEach(() => {
    cohortList = new CohortManager()
  })

  it('should create a cohort', () => {
    expect(cohortList.createCohort('Cohort 12')).toEqual([new Cohort(1, 'Cohort 12')])
  })
})
