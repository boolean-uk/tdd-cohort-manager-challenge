import CohortManager from "./CohortManager";
const cm = new CohortManager();
const cohortUl = document.querySelector("#cohort-list");
const cohortPanel = document.querySelector("#cohort-panel-section");
const studentPanel = document.querySelector("#student-panel-section");
const createCohortButton = document.querySelector("#new-cohort-button");
const findCohortButton = document.querySelector("#find-cohort-button");
const findStudentButton = document.querySelector('#find-student-button')

cm.addCohort("Cohort 1");
cm.addCohort("Cohort 2");
cm.addStudent("Cohort 1", "Tom", "Johnson", "TommyJ", "tommy@j.com");
cm.addStudent("Cohort 1", "Dave", "Johnson", "DaveyJ", "davey@j.com");
cm.addStudent("Cohort 2", "Paul", "Johnson", "PaulyJ", "pauly@j.com");
cm.addStudent("Cohort 2", "Mike", "Johnson", "MikeyJ", "mikey@j.com");
renderCohortList();

createCohortButton.addEventListener("click", () => {
  const createCohortInput = document.querySelector("#new-cohort-input");
  cm.addCohort(createCohortInput.value);
  createCohortInput.value = "";
  renderCohortList();
});

findCohortButton.addEventListener("click", () => {
  const findCohortInput = document.querySelector("#find-cohort-input");
  try {
    renderCohortPanel(findCohortInput.value);
  } catch (error) {
    const findCohortQuery = document.querySelector("#find-cohort-query");
    const p = document.createElement("p");
    p.classList.add("error-message");
    p.innerText = error;
    findCohortQuery.append(p);
    setTimeout(() => {
      findCohortQuery.removeChild(p);
    }, "2000");
  }
  findCohortInput.value = "";
});

findStudentButton.addEventListener('click', () => {
    const findStudentInput = document.querySelector('#find-student-input')
    try {
        const targetStudent = cm.findStudentById(findStudentInput.value)
        renderStudentInfo(targetStudent)
    } catch(error) {
        const findStudentQuery = document.querySelector("#find-student-query");
    const p = document.createElement("p");
    p.classList.add("error-message");
    p.innerText = error;
    findStudentQuery.append(p);
    setTimeout(() => {
      findStudentQuery.removeChild(p);
    }, "2000");
    }
    findStudentInput.value = "";
})

function renderCohortList() {
  cohortUl.innerHTML = "";
  cm.cohorts.forEach((cohort) => {
    const cohortLi = document.createElement("li");
    cohortLi.classList.add("cohort-li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.innerText = "Delete";
    p.innerText = cohort.name;
    cohortLi.append(p);
    cohortLi.append(button);

    button.addEventListener("click", () => {
      cm.removeCohort(cohort.name);
      renderCohortList();
      cohortPanel.innerHTML = "";
    });

    p.addEventListener("click", (e) => {
      cohortPanel.innerHTML = "";
      renderCohortPanel(e.target.innerHTML);
    });

    cohortUl.append(cohortLi);
  });
}

function renderCohortPanel(cohortName) {
  const targetCohort = cm.findCohort(cohortName);
  const cohortPanelDiv = document.createElement("div");
  cohortPanel.innerHTML = "";
  cohortPanelDiv.setAttribute("id", "cohort-panel");

  const h2 = document.createElement("h2");
  h2.innerText = targetCohort.name;
  cohortPanelDiv.append(h2);
  cohortPanel.append(cohortPanelDiv);

  const p = document.createElement("p");
  if (targetCohort.students.length === 0) {
    p.innerText = "This cohort currently has no students enrolled";
  } else {
    p.innerText = "Students:";
  }
  cohortPanelDiv.append(p);

  const studentUl = document.createElement("ul");
  studentUl.setAttribute("id", "cohort-students");
  cohortPanelDiv.append(studentUl);

  targetCohort.students.forEach((student) => {
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      cm.removeStudent(cohortName, student.firstName, student.lastName);
      renderCohortPanel(cohortName);
    });
    let studentLi = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = `${student.firstName} ${student.lastName}`;
    p.addEventListener("click", () => {
      renderStudentInfo(student);
    });

    studentLi.append(p);
    studentLi.append(button);
    studentUl.append(studentLi);
  });

  const addStudentForm = document.createElement("form");
  addStudentForm.setAttribute("id", "add-student-form");
  cohortPanelDiv.append(addStudentForm);

  const addStudentTitle = document.createElement("h3");
  addStudentTitle.innerText = "Add Student";
  addStudentForm.append(addStudentTitle);

  const studentFirstNameInput = document.createElement("input");
  studentFirstNameInput.setAttribute("id", "first-name-input");
  studentFirstNameInput.setAttribute("type", "textbox");
  studentFirstNameInput.setAttribute("placeholder", "Student first name...");
  addStudentForm.append(studentFirstNameInput);

  const studentLastNameInput = document.createElement("input");
  studentLastNameInput.setAttribute("id", "last-name-input");
  studentLastNameInput.setAttribute("type", "textbox");
  studentLastNameInput.setAttribute("placeholder", "Student last name...");
  addStudentForm.append(studentLastNameInput);

  const studentgitHubInput = document.createElement("input");
  studentgitHubInput.setAttribute("id", "github-input");
  studentgitHubInput.setAttribute("type", "textbox");
  studentgitHubInput.setAttribute("placeholder", "Student git hub...");
  addStudentForm.append(studentgitHubInput);

  const studentEmail = document.createElement("input");
  studentEmail.setAttribute("id", "email-input");
  studentEmail.setAttribute("type", "textbox");
  studentEmail.setAttribute("placeholder", "Student email...");
  addStudentForm.append(studentEmail);

  const addStudentButton = document.createElement("button");
  addStudentButton.innerText = "Add";
  addStudentButton.setAttribute("type", "submit");
  addStudentForm.append(addStudentButton);

  addStudentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = addStudentForm.querySelector("#first-name-input").value;
    const lastName = addStudentForm.querySelector("#last-name-input").value;
    const gitHub = addStudentForm.querySelector("#github-input").value;
    const email = addStudentForm.querySelector("#email-input").value;
    cm.addStudent(targetCohort.name, firstName, lastName, gitHub, email);
    cohortPanelDiv.innerHTML = "";
    renderCohortPanel(targetCohort.name);
  });
}

function renderStudentInfo(student) {
  const studentPanelDiv = document.createElement("div");
  studentPanelDiv.setAttribute("id", "student-panel");

  studentPanel.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerText = `${student.firstName} ${student.lastName}`;
  studentPanelDiv.append(h2);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "student-info-list");
  studentPanelDiv.append(ul);

  const idLi = document.createElement("li");
  const idP = document.createElement("p");
  idP.innerText = `Student ID: ${student.studentId}`;
  idLi.append(idP);
  ul.append(idLi);

  const emailLi = document.createElement("li");
  const emailP = document.createElement("p");
  emailP.innerText = `Email: ${student.email}`;
  emailLi.append(emailP);
  ul.append(emailLi);

  const githubLi = document.createElement("li");
  const githubP = document.createElement("p");
  githubP.innerText = `Github: ${student.githubUsername}`;
  githubLi.append(githubP);
  ul.append(githubLi);

  studentPanel.append(studentPanelDiv);
}
