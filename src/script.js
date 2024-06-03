import CohortManager from './CohortManager'

const cm = new CohortManager

const addCohortButton = document.querySelector('#add-cohort-btn')

addCohortButton.addEventListener('click', () => {
    console.log(cm)
})