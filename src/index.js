class Cohorts {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    if (
      this.cohorts.find((element) => {
        return element.name === name
      })
    ) {
      throw new Error(
        'Cohort already exists with this name, please ensure each name is unique'
      )
    }

    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
  }

  removeCohort(name) {
    if (
      !this.cohorts.find((element) => {
        return element.name === name
      })
    ) {
      throw new Error('Cohort not found')
    }
    this.cohorts = this.cohorts.filter((element) => {
      return element.name !== name
    })
  }

  addStudent(name, cohortName) {
    const cohort = this.cohorts.find((element) => {
      return element.name === cohortName
    })

    if (!cohort) {
      throw new Error('Cohort not found')
    }
    const student = new Student(name, cohort.idCounter)

    cohort.students.push(student)

    cohort.idCounter++
  }

  removeStudent(cohortName, studentId) {
    const cohort = this.cohorts.find((element) => {
      return element.name === cohortName
    })

    if (!cohort) {
      throw new Error('Cohort not found')
    }

    if (
      !cohort.students.find((element) => {
        return element.id === studentId
      })
    ) {
      throw new Error('Student not found')
    }

    cohort.students = cohort.students.filter((element) => {
      return element.id !== studentId
    })
  }
}

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
    this.idCounter = 1
  }
}

class Student {
  constructor(name, id) {
    this.name = name
    this.id = id
  }
}

export default Cohorts

export { Cohort }
