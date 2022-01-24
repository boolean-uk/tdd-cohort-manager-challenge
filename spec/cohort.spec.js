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
  //Q3
  it('Add student to a specific cohort', () => {
    // set up
    const expected = new Student('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    // execute
    const result = cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    // verify
    expect(result).toEqual(expected)
  })
  //Q5
  it('Remove student from a specific cohort', () => {
    // set up
    const expected = [
      new Student('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com'),
      new Student('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    ]
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Bubble', '@Buble1', 'MichaelSings@gmail.com')
    expect(cohort.studentList.length).toEqual(3)
    const result = cohort.removeStudent('ID3')
    // verify
    expect(result.length).toEqual(2)
    expect(result[0].studentID).toEqual(expected[0].studentID)
    expect(result[1].studentID).toEqual(expected[1].studentID)
  })
  //Q6
  it('Search for a student by ID', () => {
    //setup
    const expected = new Student('ID3', 'Michael', 'Bubble', '@Buble1', 'MichaelSings@gmail.com')
    //execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Bubble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.searchStudent('ID3')
    //verfity 
    expect(result).toEqual(expected)
  })
  it('Return errors if student not found', () => {
    // set up
    const expected = 'ERROR: Student not found'
    // execute
    cohort.addStudent('ID1', 'Michael', 'Jordan', '@Micky1', 'MichaelDunks@gmail.com')
    cohort.addStudent('ID2', 'Michael', 'Blackson', '@Blackson1', 'MichaelLaughs@gmail.com')
    cohort.addStudent('ID3', 'Michael', 'Bubble', '@Buble1', 'MichaelSings@gmail.com')
    const result = cohort.searchStudent('ID45')
    // verify
    expect(result).toEqual(expected)
  })
})