class CohortDetainment {
  constructor() {
    this.cohortManager = []
    this.idCount = 1
  }

  createCohort(cohortName) {
    if (cohortName.length < 1) {
      throw new Error('Empty string is not valid!')
    }
    this.cohortManager.forEach((teamName) => {
      for (const key in teamName) {
        if (key === cohortName) {
          throw new Error('Cohort already Exists!')
        }
      }
    })
    const newCohort = { [cohortName.toLowerCase()]: [] }
    this.cohortManager.push(newCohort)
    return newCohort
  }

  searchForCohort(cohortName) {
    const resultOfFind = this.cohortManager.find((obj) =>
      obj.hasOwnProperty(cohortName)
    )
    return resultOfFind
  }

  addStudent(cohortName, newStudentFirstName, newStudentLastName) {
    this.cohortManager.forEach((team) => {
      for (const key in team) {
        for (let i = 0; i < team[key].length; i++) {
          if (
            team[key][i].firstName === newStudentFirstName &&
            team[key][i].lastName === newStudentLastName
          ) {
            throw new Error(
              'Student already Exists either in this or another cohort!'
            )
          }
        }
      }
    })
    const resultOfFind = this.cohortManager.find((obj) =>
      obj.hasOwnProperty(cohortName)
    )
    const newStudent = {
      StudentID: this.idCount++,
      firstName: newStudentFirstName,
      lastName: newStudentLastName,
      githubUsername: 'NoroAxper',
      email: 'classified'
    }
    if (resultOfFind[cohortName].length === 24) {
      throw new Error('Cohort capacity of 24 reached!')
    } else {
      resultOfFind[cohortName].push(newStudent)
      return newStudent
    }
  }

  removeCohort(cohortName) {
    let idxOfCohort
    const resultOfFind = this.cohortManager.find((obj, idx) => {
      if (obj.hasOwnProperty(cohortName)) {
        idxOfCohort = idx
        return obj
      } else return false
    })
    if (!resultOfFind) {
      throw new Error('Cohort Not Found!')
    } else {
      this.cohortManager.splice(idxOfCohort, 1)
      return resultOfFind
    }
  }

  removeStudent(cohortName, studentFirstName, studentLastName) {
    let idxOfStudent
    let idxOfCohort
    const resultOfCohortFind = this.cohortManager.find((obj, idx) => {
      if (obj.hasOwnProperty(cohortName)) {
        idxOfCohort = idx
        return obj
      } else return false
    })
    if (!resultOfCohortFind) {
      throw new Error('Cohort Not Found!')
    } else {
      const resultOfStudentFind = resultOfCohortFind[cohortName].find(
        (obj, idx) => {
          if (
            obj.firstName.toLowerCase() === studentFirstName.toLowerCase() &&
            obj.lastName.toLowerCase() === studentLastName.toLowerCase()
          ) {
            idxOfStudent = idx
            return obj
          } else return false
        }
      )
      if (!resultOfStudentFind) {
        throw new Error('Student Not Found!')
      } else {
        this.cohortManager[idxOfCohort][cohortName].splice(idxOfStudent, 1)
        return resultOfStudentFind
      }
    }
  }

  searchForStudent(id) {
    let theOne
    this.cohortManager.forEach((obj) => {
      for (const key in obj) {
        // console.log('this is key: ', key)
        // console.log('this is m :', obj)
        // console.log('this is experiment :', obj[key])
        for (let i = 0; i < obj[key].length; i++) {
          if (obj[key][i].StudentID === id) {
            // console.log(obj[key][i])
            theOne = obj[key][i]
          }
        }
      }
    })
    return theOne
  }
}

// const cd = new CohortDetainment()
// cd.createCohort('team1')
// cd.addStudent('team1', 'Noro', 'Jan')
// cd.addStudent('team1', 'Noro', 'Jan')
// cd.addStudent('team1', 'Noro', 'Jan')
// console.log(cd.cohortManager[0].team1)
module.exports = CohortDetainment
