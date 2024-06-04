import CohortList from './index.js'

const addCohortForm = document.querySelector('.add-cohort-form')
const addCohortInput = document.querySelector('#add-cohort-input')
const selectCohortDiv = document.querySelector('.select-cohort-container')
const addStudentForm = document.querySelector('.add-student-form')
const selectCohort = document.querySelector('.select-cohort')
const addFirstNameInput = document.querySelector('#first-name-input')
const addLastNameInput = document.querySelector('#last-name-input')
const addUsernameInput = document.querySelector('#username-input')
const addEmailInput = document.querySelector('#email-input')
const studentsUl = document.querySelector('.students-ul')

let cohortInput = ''
let selectedCohort = ''

const cohortList = new CohortList()

function handleAddCohort() {
  addCohortForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const cohortName = addCohortInput.value

    cohortList.addCohort(cohortName)
    renderCohortSelect()
    renderCohortSelectForm()
  })
}

function renderCohortSelect() {
  selectCohortDiv.innerHTML = ''

  const label = document.createElement('label')
  const select = document.createElement('select')

  label.innerText = 'Select Cohort'

  const defaultOption = document.createElement('option')
  defaultOption.innerText = '--Select cohort--'
  select.append(defaultOption)

  cohortList.cohorts.forEach((cohort) => {
    const option = document.createElement('option')

    option.innerText = cohort.cohortName
    select.append(option)
  })

  selectCohortDiv.append(label)
  selectCohortDiv.append(select)

  select.addEventListener('change', () => {
    selectedCohort = select.value
    renderStudents()
  })
}

function renderCohortSelectForm() {
  selectCohort.innerHTML = ''

  const labelSelect = document.createElement('label')
  const select = document.createElement('select')

  labelSelect.innerText = 'Select Cohort'

  const defaultOption = document.createElement('option')
  defaultOption.innerText = '--Select cohort--'
  select.append(defaultOption)

  cohortList.cohorts.forEach((cohort) => {
    const option = document.createElement('option')

    option.innerText = cohort.cohortName
    select.append(option)
  })

  selectCohort.append(labelSelect)
  selectCohort.append(select)

  select.addEventListener('change', () => {
    cohortInput = select.value
  })
}

function handleAddStudent() {
  addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault()

    cohortList.addStudent(
      cohortInput,
      addFirstNameInput.value,
      addLastNameInput.value,
      addUsernameInput.value,
      addEmailInput.value
    )
    renderCohortSelect()
    renderCohortSelectForm()
    renderStudents()

    console.log(cohortList.cohorts)
  })
}

function renderStudents() {
  studentsUl.innerHTML = ''

  const foundCohort = cohortList.cohorts.find(
    (cohort) => cohort.cohortName === selectedCohort
  )

  if (foundCohort) {
    foundCohort.students.forEach((student) => {
      const li = document.createElement('li')
      li.innerText = student.firstName

      studentsUl.append(li)
    })
  }

  console.log(foundCohort)
}

renderCohortSelectForm()
handleAddCohort()
renderCohortSelect()
handleAddStudent()
renderStudents()
