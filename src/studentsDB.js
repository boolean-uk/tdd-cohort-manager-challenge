const students = [
  {
    StudentID: 1,
    firstName: 'Bart',
    lastName: 'Simpson',
    githubUsername: 'bartman1337',
    email: 'bart.simpson@springfield.edu'
  },
  {
    StudentID: 2,
    firstName: 'Lisa',
    lastName: 'Simpson',
    githubUsername: 'lisasaxophone',
    email: 'lisa.simpson@springfield.edu'
  },
  {
    StudentID: 3,
    firstName: 'Homer',
    lastName: 'Simpson',
    githubUsername: 'homercooldude',
    email: 'homer.simpson@springfield.edu'
  },
  {
    StudentID: 4,
    firstName: 'Eric',
    lastName: 'Cartman',
    githubUsername: 'cartmanrules',
    email: 'eric.cartman@southpark.com'
  },
  {
    StudentID: 5,
    firstName: 'Kyle',
    lastName: 'Broflovski',
    githubUsername: 'kyleman',
    email: 'kyle.broflovski@southpark.com'
  },
  {
    StudentID: 6,
    firstName: 'Stan',
    lastName: 'Marsh',
    githubUsername: 'stanmarsh',
    email: 'stan.marsh@southpark.com'
  },
  {
    StudentID: 7,
    firstName: 'Morty',
    lastName: 'Smith',
    githubUsername: 'morty_c137',
    email: 'morty.smith@citadel.com'
  },
  {
    StudentID: 8,
    firstName: 'Rick',
    lastName: 'Sanchez',
    githubUsername: 'ricksanchez',
    email: 'rick.sanchez@citadel.com'
  },
  {
    StudentID: 9,
    firstName: 'Jerry',
    lastName: 'Smith',
    githubUsername: 'jerry_bore',
    email: 'jerry.smith@citadel.com'
  },
  {
    StudentID: 10,
    firstName: 'Marge',
    lastName: 'Simpson',
    githubUsername: 'marge_simpson',
    email: 'marge.simpson@springfield.edu'
  },
  {
    StudentID: 11,
    firstName: 'Ned',
    lastName: 'Flanders',
    githubUsername: 'ned_flanders',
    email: 'ned.flanders@springfield.edu'
  },
  {
    StudentID: 12,
    firstName: 'Milhouse',
    lastName: 'Van Houten',
    githubUsername: 'milhousevh',
    email: 'milhouse.vanhouten@springfield.edu'
  },
  {
    StudentID: 13,
    firstName: 'Kenny',
    lastName: 'McCormick',
    githubUsername: 'mysterion',
    email: 'kenny.mccormick@southpark.com'
  },
  {
    StudentID: 14,
    firstName: 'Wendy',
    lastName: 'Testaburger',
    email: 'wendy.testaburger@southpark.com'
  },
  {
    StudentID: 15,
    firstName: 'Butters',
    lastName: 'Stotch',
    email: 'butters.stotch@southpark.com'
  },
  {
    StudentID: 16,
    firstName: 'Summer',
    lastName: 'Smith',
    githubUsername: 'summersmith',
    email: 'summer.smith@citadel.com'
  },
  {
    StudentID: 17,
    firstName: 'Beth',
    lastName: 'Smith',
    githubUsername: 'beth_sanchez',
    email: 'beth.smith@citadel.com'
  },
  {
    StudentID: 18,
    firstName: 'Scruffy',
    lastName: 'the Janitor',
    githubUsername: 'scruffy',
    email: 'scruffy.janitor@citadel.com'
  },
  {
    StudentID: 19,
    firstName: 'Principal',
    lastName: 'Skinner',
    email: 'seymour.skinner@springfield.edu'
  },
  {
    StudentID: 20,
    firstName: 'Nelson',
    lastName: 'Muntz',
    email: 'nelson.muntz@springfield.edu'
  },
  {
    StudentID: 21,
    firstName: 'Ralph',
    lastName: 'Wiggum',
    email: 'ralph.wiggum@springfield.edu'
  },
  {
    StudentID: 22,
    firstName: 'Superintendent',
    lastName: 'Chalmers',
    email: 'chalmers@springfield.edu'
  },
  {
    StudentID: 23,
    firstName: 'Apu',
    lastName: 'Nahasapeemapetilon',
    email: 'apu@kwikiemart.com'
  },
  {
    StudentID: 24,
    firstName: 'Moe',
    lastName: 'Szyslak',
    email: 'moe@tavern.com'
  },
  {
    StudentID: 25,
    firstName: 'Cletus',
    lastName: 'Spuckler',
    email: 'cletus@spucklerfarm.com'
  },
  {
    StudentID: 26,
    firstName: 'Barney',
    lastName: 'Gumble',
    email: 'barney.gumble@moe.com'
  },
  {
    StudentID: 27,
    firstName: 'Sideshow',
    lastName: 'Bob',
    email: 'sideshowbob@krustyland.com'
  },
  {
    StudentID: 28,
    firstName: 'Krusty',
    lastName: 'the Clown',
    email: 'krusty@krustyland.com'
  },
  {
    StudentID: 29,
    firstName: 'Mr. Burns',
    lastName: '',
    email: 'burns@springfieldnuclear.com'
  },
  {
    StudentID: 30,
    firstName: 'Snake',
    lastName: 'Jailbird',
    email: 'snake@springfieldprison.com'
  },
  {
    StudentID: 31,
    firstName: 'Chief',
    lastName: 'Wiggum',
    email: 'wiggum@springfieldpd.com'
  },
  {
    StudentID: 32,
    firstName: 'Leopold',
    lastName: 'Stotch',
    email: 'leopold.stotch@southpark.com'
  },
  {
    StudentID: 33,
    firstName: 'Token',
    lastName: 'Black',
    email: 'token.black@southpark.com'
  },
  {
    StudentID: 34,
    firstName: 'Tweek',
    lastName: 'Tweak',
    email: 'tweek@tweakscoffee.com'
  },
  {
    StudentID: 35,
    firstName: 'Craig',
    lastName: 'Tucker',
    email: 'craig@southpark.com'
  },
  {
    StudentID: 36,
    firstName: 'Birdperson',
    lastName: '',
    email: 'birdperson@citadel.com'
  },
  {
    StudentID: 37,
    firstName: 'Squirrely Dan',
    lastName: '',
    email: 'squirrelydan@citadel.com'
  },
  {
    StudentID: 38,
    firstName: 'Mr. Poopybutthole',
    lastName: '',
    email: 'mrpoopybutthole@citadel.com'
  },
  {
    StudentID: 39,
    firstName: 'Goldenfold',
    lastName: '',
    email: 'goldenfold@citadel.com'
  },
  {
    StudentID: 40,
    firstName: 'Noob-Noob',
    lastName: '',
    email: 'noobNoob@citadel.com'
  },
  {
    StudentID: 41,
    firstName: 'Mr. Meseeks',
    lastName: '',
    email: 'mrmeeseeks@citadel.com'
  },
  {
    StudentID: 42,
    firstName: 'Pickle Rick',
    lastName: 'Sanchez',
    email: 'picklerick@pickledimension.com'
  }
]

console.log(students[23], students[24], students[41])

export default students
