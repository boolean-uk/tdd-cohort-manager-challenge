import CohortList from './index.js'

const addCohortForm = document.querySelector('.add-cohort-form')
const addCohortInput = document.querySelector('#add-cohort-input')
const selectCohortDiv = document.querySelector('.select-cohort-container')

const cohortList = new CohortList()

function handleAddCohort() {
  addCohortForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const cohortName = addCohortInput.value

    cohortList.addCohort(cohortName)
    renderCohortSelect()
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

handleAddCohort()
renderCohortSelect()
