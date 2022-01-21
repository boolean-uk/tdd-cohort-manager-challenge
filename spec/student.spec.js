const Student = require("../src/student.js")


describe("Student", () => {
  let student

  beforeEach(() => {
    student = new Student(1, "Jane", "Doe", "jdoe", "jdoe@gmail.com")
  })

  
  it("Student first name property works", () => {
    const expected = "Jane"
    const test = student.firstname
    expect(test).toEqual(expected)
  })

  it("check id - is correct", () => {
    const expected = true
    const test = student.checkID(1)
    expect(test).toEqual(expected)
  })

  it("check first name - not correct", () => {
    const expected = false
    const test = student.checkFirstname("John")
    expect(test).toEqual(expected)
  })

  it("check last name - correct", () => {
    const expected = true
    const test = student.checkLastname("Doe")
    expect(test).toEqual(expected)
  })

})