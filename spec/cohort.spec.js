const Student = require('../src/student.js')
const Cohort = require('../src/cohort.js')

describe('Student tests', () => {
  let cohort;

  beforeEach(() => {
    cohort = new Cohort()
  })

  it('create a student list', () => {
    // set up 
    const expected = []
    // execute
    const result = cohort.createList()
    // verify
    expect(result).toEqual(expected)
  })
  // Q3
  it('Add student to a specific cohort', () => {
    // set up
    const expected = [new Student('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')]
    // execute
    const result = cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    // verify
    expect(result).toEqual(expected)
  })
  // Q5
  it('Remove student from a specific cohort', () => {
    // set up
    const expected = [
      new Student('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com'),
      new Student('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    ]
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    expect(cohort.studentList.length).toEqual(3)
    const result = cohort.removeStudent('ID3')
    // verify
    expect(result.length).toEqual(2)
    expect(result[0].studentID).toEqual(expected[0].studentID)
    expect(result[1].studentID).toEqual(expected[1].studentID)
  })
  // Q7 (EXTENDED)
  it('Search for a student by ID', () => {
    // setup
    const expected = new Student('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.searchStudent('ID3')
    // verfity
    expect(result).toEqual(expected)
  })
  // Q6
  it('Return errors if student not found', () => {
    // set up
    const expected = 'ERROR: Student not found'
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.searchStudent('ID45')
    // verify
    expect(result).toEqual(expected)
  })
  // Q8
  it('Cohorts have fixed capacity at 24 students', () => {
    // set up
    const expected = 'Limit exceeded at 24'
    // execute
    cohort.addStudent('ID1')
    cohort.addStudent('ID2')
    cohort.addStudent('ID3')
    cohort.addStudent('ID4')
    cohort.addStudent('ID5')
    cohort.addStudent('ID6')
    cohort.addStudent('ID7')
    cohort.addStudent('ID8')
    cohort.addStudent('ID9')
    cohort.addStudent('ID10')
    cohort.addStudent('ID11')
    cohort.addStudent('ID12')
    cohort.addStudent('ID13')
    cohort.addStudent('ID14')
    cohort.addStudent('ID15')
    cohort.addStudent('ID16')
    cohort.addStudent('ID17')
    cohort.addStudent('ID18')
    cohort.addStudent('ID19')
    cohort.addStudent('ID20')
    cohort.addStudent('ID21')
    cohort.addStudent('ID22')
    cohort.addStudent('ID23')
    cohort.addStudent('ID24')
    const result = cohort.fixedCapacity()
    // verify
    expect(result.length).toEqual(expected.length)
  })
  // Q10
  it('The same student cannot exist in multiple cohorts', () => {
    // set up
    const expected = 'Student cannot exist in multiple cohorts'
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.addStudent('ID2')
    // verify
    expect(result).toEqual(expected)
  })
  // Q11
  it('A student cannot be removed from a cohort if it was not present in the first place', () => {
    // set up
    const expected = 'Non-existent: Student Cannot be removed'
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.removeStudent('ID05', 'James', 'Brown', '@IFeelGood', 'IFeelGood@gmail.com')
    // verify
    expect(result).toEqual(expected)
  })
  // Q12
  it('Search for a student by first name, or ,last name', () => {
    // setup
    const expected = [new Student('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')]
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Buble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.searchStudentby('Michael', 'Buble')
    // verfity
    expect(result).toEqual(expected)
  })
})
