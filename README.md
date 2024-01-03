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

### Acceptance Criteria

#### Standard
```
The Cohort Manager should be able to support the following interactions

[x] Create a cohort with a cohort name 
[…] Search for a cohort by cohort name
[x] Add student to a specific cohort
[x] Remove a cohort by cohort name
[x] Remove student from a specific cohort
[x] Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```

#### Extended
```
[x] Search for student by student ID
[x] Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
[x] Cohorts can't have the same name, and can't exist without a name
[x] The same student can't exist in multiple cohorts.
[x] A student can't be removed from a cohort if it wasn't present in the first place.
[ ] Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes
```

#### Bonus
```
- Send a text message to yourself whenever a student is successfully added or removed to a cohort
Use: https://www.twilio.com/docs/sms/quickstart/node
```


### Tests
You can run all the test manually whenever you want:
```sh
$ npm test
```

This will run two sets of tests.

### Linter Tests
Using `npm test` will first run a set of tests that make sure your code satisfies specific stylistic rules - make sure you resolve these problems as you go.

You can also run the linter manually whenever you want and autocorrect where it's possible:
```sh
npx eslint src --fix
```

### Functional Tests
The second set of tests that will run are functional. They test the behaviour of the programs you write.

You can also run the tests manually whenever you want
```sh
npx jasmine # run all the tests
# or
npx jasmine spec/path/to/specfile # run a set of tests in a spec file
```
