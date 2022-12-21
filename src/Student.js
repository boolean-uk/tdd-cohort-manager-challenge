class Student {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str) {
    this.id++
    const item = {
      id: this.id,
      firstName: 'name',
      lastName: 'last name',
      githubUsername: '',
      email: ''
    }
    this.items.push(item)
    return item
  }
}

module.exports = Student
