export default class Cohort {
  constructor(name, students = people, studentAdded = newStudent) {
    this.name = name
    this.students = students
    this.studentAdded = studentAdded
  }

  getName() {
    return this.name
  }
}
const newStudent = [
  {
    id: 11,
    firstName: 'Peter',
    lastName: 'Parker',
    githubUsername: 'peterparker123',
    email: 'definitelynotspiderman@gmail.com'
  }
]
const people = [
  {
    id: 1,
    firstName: 'Bart',
    lastName: 'Simpson',
    githubUsername: 'bartman1337',
    email: 'bart.simpson@springfield.edu'
  },
  {
    id: 2,
    firstName: 'Lisa',
    lastName: 'Simpson',
    githubUsername: 'lisasaxophone',
    email: 'lisa.simpson@springfield.edu'
  },
  {
    id: 3,
    firstName: 'Homer',
    lastName: 'Simpson',
    githubUsername: 'homercooldude',
    email: 'homer.simpson@springfield.edu'
  },
  {
    id: 4,
    firstName: 'Eric',
    lastName: 'Cartman',
    githubUsername: 'cartmanrules',
    email: 'eric.cartman@southpark.com'
  },
  {
    id: 5,
    firstName: 'Kyle',
    lastName: 'Broflovski',
    githubUsername: 'kyleman',
    email: 'kyle.broflovski@southpark.com'
  },
  {
    id: 6,
    firstName: 'Stan',
    lastName: 'Marsh',
    githubUsername: 'stanmarsh',
    email: 'stan.marsh@southpark.com'
  },
  {
    id: 7,
    firstName: 'Morty',
    lastName: 'Smith',
    githubUsername: 'morty_c137',
    email: 'morty.smith@citadel.com'
  },
  {
    id: 8,
    firstName: 'Rick',
    lastName: 'Sanchez',
    githubUsername: 'ricksanchez',
    email: 'rick.sanchez@citadel.com'
  },
  {
    id: 9,
    firstName: 'Jerry',
    lastName: 'Smith',
    githubUsername: 'jerry_bore',
    email: 'jerry.smith@citadel.com'
  },
  {
    id: 10,
    firstName: 'Marge',
    lastName: 'Simpson',
    githubUsername: 'marge_simpson',
    email: 'marge.simpson@springfield.edu'
  }
]
