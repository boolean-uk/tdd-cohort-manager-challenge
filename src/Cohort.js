import Student from './Student.js'
import { v4 as uuidv4 } from 'uuid';

class Cohort {
  constructor(name) {
    this.students = []
    this.id = uuidv4()
    this.name = name
  }
}

export default Cohort
