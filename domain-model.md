| methods                                                | inputs            | data                    | scenario                             | outputs |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |
| addCohort(cohort)                                      | cohort(@string)   | cohort name             | create cohort                        | @string |
|                                                        |                   |                         | already exists                       | @string |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |
| searchCohort(cohort)                                   | cohort(@string)   | cohort name             | cohort found                         | @string |
|                                                        |                   |                         | cohort does not exist                | @string |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |
| addStudent(cohort, forename, surname, username, email) | cohort(@string)   | cohort name             | student added to cohort              | @string |
|                                                        | forename(@string) | student forename        |                                      |         |
|                                                        | surname(@string)  | student surname         |                                      |         |
|                                                        | username(@string) | student github username |                                      |         |
|                                                        | email(@string)    | student email           |                                      |         |
|                                                        |                   |                         | cohort does not exist                | @string |
|                                                        |                   |                         | maximum number of students in cohort | @string |
|                                                        |                   |                         | student already in a cohort          | @string |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |
| removeCohort(cohort)                                   | cohort(@string)   | cohort name             | cohort removed                       | @string |
|                                                        |                   |                         | cohort does not exist                | @string |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |
| removeStudent(cohort, name)                            | cohort(@string)   | cohort name             | student removed from cohort          | @string |
|                                                        | name(@string)     | student full name       | student is not in cohort             | @string |
|                                                        |                   |                         | cohort does not exist                | @string |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |
| searchStudent(id)                                      | id(@number)       | student id              | student returned                     | @object |
|                                                        |                   |                         | student does not exist               | @string |
| ------------------------------------------------------ | ----------------- | ----------------------- | ------------------------------------ | ------- |