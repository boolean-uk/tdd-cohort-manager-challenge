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
    lastName: 'Janitor',
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
    lastName: 'Theclown',
    email: 'krusty@krustyland.com'
  },
  {
    StudentID: 29,
    firstName: 'Charles Montgomery Plantagenet Schicklgruber',
    lastName: 'Burns',
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
    lastName: 'Birdy',
    email: 'birdperson@citadel.com'
  },
  {
    StudentID: 37,
    firstName: 'Squirrely Dan',
    lastName: 'Squirrel',
    email: 'squirrelydan@citadel.com'
  },
  {
    StudentID: 38,
    firstName: 'Poopybutthole',
    lastName: 'Pb',
    email: 'mrpoopybutthole@citadel.com'
  },
  {
    StudentID: 39,
    firstName: 'Goldenfold',
    lastName: 'Folgengold',
    email: 'goldenfold@citadel.com'
  },
  {
    StudentID: 40,
    firstName: 'NoobNoob',
    lastName: 'Nobs',
    email: 'noobNoob@citadel.com'
  },
  {
    StudentID: 41,
    firstName: 'Meseeks',
    lastName: 'Youfind',
    email: 'mrmeeseeks@citadel.com'
  },
  {
    StudentID: 42,
    firstName: 'Pickle Rick',
    lastName: 'Sanchez',
    email: 'picklerick@pickledimension.com'
  },
  {
    StudentID: 43,
    firstName: 'Gene',
    lastName: 'Belcher',
    githubUsername: 'genethegenius',
    email: 'gene.belcher@wagstaff.edu'
  },
  {
    StudentID: 44,
    firstName: 'Louise',
    lastName: 'Belcher',
    githubUsername: 'louisebelcher',
    email: 'louise.belcher@wagstaff.edu'
  },
  {
    StudentID: 45,
    firstName: 'Tina',
    lastName: 'Belcher',
    githubUsername: 'tinabelcher',
    email: 'tina.belcher@wagstaff.edu'
  },
  {
    StudentID: 46,
    firstName: 'Bob',
    lastName: 'Belcher',
    githubUsername: 'bobbobbob',
    email: 'bob.belcher@bobsburgers.com'
 

 },
  {
    StudentID: 47,
    firstName: 'Linda',
    lastName: 'Belcher',
    githubUsername: 'lindaloo',
    email: 'linda.belcher@bobsburgers.com'
  },
  {
    StudentID: 48,
    firstName: 'Teddy',
    lastName: 'Bear',
    githubUsername: 'teddyteddybear',
    email: 'teddy@bobsburgers.com'
  },
  {
    StudentID: 49,
    firstName: 'Zeke',
    lastName: 'Zek',
    githubUsername: 'zekezeke',
    email: 'zeke@wagstaff.edu'
  },
  {
    StudentID: 50,
    firstName: 'Jimmy',
    lastName: 'PestoJr.',
    githubUsername: 'jimmypesto',
    email: 'jimmy.pesto@wagstaff.edu'
  },
  {
    StudentID: 51,
    firstName: 'Tammy',
    lastName: 'Larsen',
    githubUsername: 'tamlarsen',
    email: 'tammy.larsen@wagstaff.edu'
  },
  {
    StudentID: 52,
    firstName: 'Regular',
    lastName: 'SizedRudy',
    githubUsername: 'regularrudy',
    email: 'rudy@wagstaff.edu'
  },
  {
    StudentID: 53,
    firstName: 'Darrell',
    lastName: 'Dare',
    githubUsername: 'darrelldare',
    email: 'darrell@wagstaff.edu'
  },
  {
    StudentID: 54,
    firstName: 'Andy',
    lastName: 'Pesto',
    githubUsername: 'andyandy',
    email: 'andy.pesto@wagstaff.edu'
  },
  {
    StudentID: 55,
    firstName: 'Ollie',
    lastName: 'Pesto',
    githubUsername: 'olliepesto',
    email: 'ollie.pesto@wagstaff.edu'
  },
  {
    StudentID: 56,
    firstName: 'Logan',
    lastName: 'Bush',
    githubUsername: 'loganbush',
    email: 'logan.bush@wagstaff.edu'
  },
  {
    StudentID: 57,
    firstName: 'Peter',
    lastName: 'Griffin',
    githubUsername: 'petergriffin',
    email: 'peter.griffin@quahog.edu'
  },
  {
    StudentID: 58,
    firstName: 'Lois',
    lastName: 'Griffin',
    githubUsername: 'loisgriffin',
    email: 'lois.griffin@quahog.edu'
  },
  {
    StudentID: 59,
    firstName: 'Meg',
    lastName: 'Griffin',
    githubUsername: 'meggriffin',
    email: 'meg.griffin@quahog.edu'
  },
  {
    StudentID: 60,
    firstName: 'Chris',
    lastName: 'Griffin',
    githubUsername: 'chrisgriffin',
    email: 'chris.griffin@quahog.edu'
  },
  {
    StudentID: 61,
    firstName: 'Stewie',
    lastName: 'Griffin',
    githubUsername: 'stewiegriffin',
    email: 'stewie.griffin@quahog.edu'
  },
  {
    StudentID: 62,
    firstName: 'Brian',
    lastName: 'Griffin',
    githubUsername: 'briangriffin',
    email: 'brian.griffin@quahog.edu'
  },
  {
    StudentID: 63,
    firstName: 'Glen',
    lastName: 'Quagmire',
    githubUsername: 'glenquagmire',
    email: 'quagmire@quahog.edu'
  },
  {
    StudentID: 64,
    firstName: 'Joe',
    lastName: 'Swanson',
    githubUsername: 'joeswanson',
    email: 'joe.swanson@quahog.edu'
  },
  {
    StudentID: 65,
    firstName: 'Cleveland',
    lastName: 'Brown',
    githubUsername: 'clevelandbrown',
    email: 'cleveland.brown@quahog.edu'
  },
  {
    StudentID: 66,
    firstName: 'Herbert',
    lastName: 'Cook',
    githubUsername: 'herbert',
    email: 'herbert@quahog.edu'
  },
  {
    StudentID: 67,
    firstName: 'Carter',
    lastName: 'Pewterschmidt',
    githubUsername: 'carterp',
    email: 'carter.pewterschmidt@quahog.edu'
  },
  {
    StudentID: 68,
    firstName: 'Angela',
    lastName: 'Merkel',
    githubUsername: 'angela',
    email: 'angela@quahog.edu'
  },
  {
    StudentID: 69,
    firstName: 'Tom',
    lastName: 'Tucker',
    githubUsername: 'tomtucker',
    email: 'tom.tucker@quahog.edu'
  },
  {
    StudentID: 70,
    firstName: 'Diane',
    lastName: 'Simmons',
    githubUsername: 'dianesimmons',
    email: 'diane.simmons@quahog.edu'
  },
  {
    StudentID: 71,
    firstName: 'Bruce',
    lastName: 'Dickinson',
    githubUsername: 'bruce',
    email: 'bruce@quahog.edu'
  },
  {
    StudentID: 72,
    firstName: 'Consuela',
    lastName: 'Clean',
    githubUsername: 'consuela',
    email: 'consuela@quahog.edu'
  },
  {
    StudentID: 73,
    firstName: 'Tricia',
    lastName: 'Takanawa',
    githubUsername: 'tricia',
    email: 'tricia.takanawa@quahog.edu'
  },
  {
    StudentID: 74,
    firstName: 'Neil',
    lastName: 'Goldman',
    githubUsername: 'neil',
    email: 'neil.goldman@quahog.edu'
  },
  {
    StudentID: 75,
    firstName: 'Bruce',
    lastName: 'Wayne',
    githubUsername: 'batman',
    email: 'bruce.wayne@wayneenterprises.com'
  }
]



export default students
