import { Manager } from './manager.js'

class StudentManager extends Manager {
  searchSchoolById(studentId) {
    const foundStudent = this.list.find((student) => student.id === studentId)
    if (!foundStudent) {
      throw new Error('student not found')
    }
    return foundStudent
  }
}

export { StudentManager }
