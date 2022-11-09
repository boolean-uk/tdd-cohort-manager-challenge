const CohortManager = require('../src/CohortManager')

describe('addCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('should add and return all the cohorts and the added cohort', () => {
    cohortM.addCohort('test 1')
    cohortM.addCohort('test 2')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.cohorts[1].name).toBe('test 2')
  })

  it('the new cohort name must contain only letters and numbers', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('test 1?')).toBe('invalid name')
  })
  it('the new cohort must have a name', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('')).toBe('invalid name')
  })

  it("should return 'cohort already exist' if there's another cohort with the same name", () => {
    cohortM.cohorts = [{ name: 'test 1', capacity: 24, students: [] }]
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.addCohort('test 1')).toBe('cohort already exist')
  })
})

describe('searchByName', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('should return the selected cohort', () => {
    cohortM.cohorts = [{ name: 'test 1', capacity: 24, students: [] }]
    const result = cohortM.searchByName(cohortM.cohorts, 'test 1')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual([{ name: 'test 1', capacity: 24, students: [] }])
  })
  it('should return an error if the cohort is not found', () => {
    const result = cohortM.searchByName(cohortM.cohorts, 'test 1')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual('cohort not found')
  })
  it('should return the selected student', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova' }]
    const result = cohortM.searchByName(cohortM.students, 'test 1')
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual([{ name: 'test 1', lastN: 'prova' }])
  })
})

describe('addStudent', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })

  it('should add a student with the given informaions', () => {
    cohortM.addStudent('Patrik', 'Ellini', 'random link', 'random email')

    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.students[0].name).toEqual('Patrik')
  })
})

describe('assignStudentToCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })

  it('should return the updated cohort', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    cohortM.cohorts = [{ name: 'cohort 7', capacity: 24, students: [] }]

    const result = {
      name: 'cohort 7',
      capacity: 24,
      students: [{ name: 'test 1', lastN: 'prova', id: 1 }]
    }
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.assignStudentToCohort(1, 'cohort 7')).toEqual(result)
  })

  it('should return an error if the student or cohort are undefined', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.assignStudentToCohort(1, 'cohort 8')).toEqual(
      'cohort not found'
    )
  })
})
describe('searchById', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('should return the selected student', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]
    const result = { name: 'test 1', lastN: 'prova', id: 1 }
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.searchById(1)).toEqual(result)
  })
  it('should return error if the student is not found', () => {
    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.searchById(1)).toEqual('student not found')
  })
})

describe('removeCohort', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('should return the updated list of cohorts', () => {
    cohortM.cohorts = [{ name: 'cohort 7', capacity: 24, students: [] }]

    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.removeCohort('cohort 7')).toEqual([])
  })
  it("should return an error if the cohort doesn't exist", () => {
    const result = cohortM.removeCohort('test 1')

    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual('cohort not found')
  })
})

describe('removeStudent', () => {
  let cohortM
  beforeEach(() => {
    cohortM = new CohortManager()
  })
  it('should return the updated list of students', () => {
    cohortM.students = [{ name: 'test 1', lastN: 'prova', id: 1 }]

    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(cohortM.removeStudent('test 1')).toEqual([])
  })
  it("should return an error if the cohort doesn't exist", () => {
    const result = cohortM.removeStudent('test 1')

    expect(cohortM).toBeInstanceOf(CohortManager)
    expect(result).toEqual('student not found')
  })
})
