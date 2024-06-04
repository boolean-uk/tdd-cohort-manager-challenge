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
let cohortInput = ''

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

  cohortList.cohorts.forEach((cohort) => {
    const option = document.createElement('option')

    option.innerText = cohort.cohortName
    select.append(option)
  })

  selectCohortDiv.append(label)
  selectCohortDiv.append(select)
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
    console.log(cohortInput)
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

    console.log(cohortList.cohorts)
  })
}

renderCohortSelectForm()
handleAddCohort()
renderCohortSelect()
handleAddStudent()
