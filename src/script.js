import CohortManager from './CohortManager'
const cm = new CohortManager
const cohortUl = document.querySelector('#cohort-list')
const cohortPanel = document.querySelector('#cohort-panel')

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
        cohortLi.classList.add('cohort-li')
        cohortLi.addEventListener('click', (e) => {
            cohortPanel.innerHTML = ''
            renderCohortPanel(e)})
        cohortUl.append(cohortLi)
    })
}

function renderCohortPanel(e) {
   const targetCohort = cm.findCohort(e.target.innerHTML)
    const h3 = document.createElement('h3')
    h3.innerText = targetCohort.name
    cohortPanel.append(h3)

    const studentUl = document.createElement('ul')
    studentUl.setAttribute('id', 'cohort-students')
    cohortPanel.append(studentUl)

    targetCohort.students.forEach((student) => {
        const studentLi = createElement('li')
        studentLi.innerText = `${student.firstName} ${student.lastName}`
        studentUl.append(studentLi)
    })

    const addStudentLabel = document.createElement('label')
    addStudentLabel.setAttribute('for', 'add-student')
    addStudentLabel.innerText = 'Add Student '
    cohortPanel.append(addStudentLabel)


    const addStudentInput = document.createElement('input')
    addStudentInput.setAttribute('name', 'add-student')
    addStudentInput.setAttribute('type', 'textbox')
    addStudentInput.setAttribute('placeholder', 'Student name...')
    cohortPanel.append(addStudentInput)

    const addStudentButton = document.createElement('button')
    addStudentButton.innerText = 'Add'
    cohortPanel.append(addStudentButton)

}