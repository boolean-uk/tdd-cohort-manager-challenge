# Cohort Manager

```
_________        .__                   __       _____                                             
\_   ___ \  ____ |  |__   ____________/  |_    /     \ _____    ____ _____     ____   ___________ 
/    \  \/ /  _ \|  |  \ /  _ \_  __ \   __\  /  \ /  \\__  \  /    \\__  \   / ___\_/ __ \_  __ \
\     \___(  <_> )   Y  (  <_> )  | \/|  |   /    Y    \/ __ \|   |  \/ __ \_/ /_/  >  ___/|  | \/
 \______  /\____/|___|  /\____/|__|   |__|   \____|__  (____  /___|  (____  /\___  / \___  >__|   
        \/            \/                             \/     \/     \/     \//_____/      \/       
```

### Setup

1. Fork this repository to your GitHub account
2. Clone your forked repository to your machine
3. Change directory into the project.
4. Install the project dependencies

```sh
$ npm ci
```

### Description

You should be able to run this in your JS console (using your node REPL, or browser console). For any assumptions made, represent this in your domain model.

**NB** This is a TDD challenge - evidence your work by committing for each passing test and its source code.

A domain model is required as the core criteria.

### Acceptance Criteria

#### Standard

The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

#### Extended

- Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes

#### Bonus

- Send an email to yourself whenever a student is successfully added or removed to a cohort
Use: https://www.resend.com/
- Build a frontend application for this system

### Tests

You can run all the test manually whenever you want:

```sh
$ npm test # to run all tests

OR 

$ npx jasmine spec/path/to/specfile # to run a set of tests in a spec file
```