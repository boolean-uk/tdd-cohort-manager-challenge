import CohortManager from './CohortManager'
const cm = new CohortManager
const cohortUl = document.querySelector('#cohort-list')

const createCohortButton = document.querySelector('#new-cohort-button')

createCohortButton.addEventListener('click', () => {
    let createCohortInput = document.querySelector('#new-cohort-input')
    cm.addCohort(createCohortInput.value)
    createCohortInput.value = ''
    renderCohortList()
})

function renderCohortList() {
    cohortUl.innerHTML = ''
    cm.cohorts.forEach((cohort) => {
        const cohortLi = document.createElement('li')
        cohortLi.innerText = cohort.name
        cohortUl.append(cohortLi)
    })
}