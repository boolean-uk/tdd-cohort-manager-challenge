const students = [
  {
    id: 1,
    firstName: 'Bart',
    lastName: 'Simpson',
    githubUsername: 'bartman1337',
    email: 'bart.simpson@springfield.edu'
  },
  {
    id: 2,
    firstName: 'Lisa',
    lastName: 'Simpson',
    githubUsername: 'lisasaxophone',
    email: 'lisa.simpson@springfield.edu'
  },
  {
    id: 3,
    firstName: 'Homer',
    lastName: 'Simpson',
    githubUsername: 'homercooldude',
    email: 'homer.simpson@springfield.edu'
  },
  {
    id: 4,
    firstName: 'Eric',
    lastName: 'Cartman',
    githubUsername: 'cartmanrules',
    email: 'eric.cartman@southpark.com'
  },
  {
    id: 5,
    firstName: 'Kyle',
    lastName: 'Broflovski',
    githubUsername: 'kyleman',
    email: 'kyle.broflovski@southpark.com'
  },
  {
    id: 6,
    firstName: 'Stan',
    lastName: 'Marsh',
    githubUsername: 'stanmarsh',
    email: 'stan.marsh@southpark.com'
  },
  {
    id: 7,
    firstName: 'Morty',
    lastName: 'Smith',
    githubUsername: 'morty_c137',
    email: 'morty.smith@citadel.com'
  },
  {
    id: 8,
    firstName: 'Rick',
    lastName: 'Sanchez',
    githubUsername: 'ricksanchez',
    email: 'rick.sanchez@citadel.com'
  },
  {
    id: 9,
    firstName: 'Jerry',
    lastName: 'Smith',
    githubUsername: 'jerry_bore',
    email: 'jerry.smith@citadel.com'
  },
  {
    id: 10,
    firstName: 'Marge',
    lastName: 'Simpson',
    githubUsername: 'marge_simpson',
    email: 'marge.simpson@springfield.edu'
  },
  {
    id: 11,
    firstName: 'Ned',
    lastName: 'Flanders',
    githubUsername: 'ned_flanders',
    email: 'ned.flanders@springfield.edu'
  },
  {
    id: 12,
    firstName: 'Milhouse',
    lastName: 'Van Houten',
    githubUsername: 'milhousevh',
    email: 'milhouse.vanhouten@springfield.edu'
  },
  {
    id: 13,
    firstName: 'Kenny',
    lastName: 'McCormick',
    githubUsername: 'mysterion',
    email: 'kenny.mccormick@southpark.com'
  },
  {
    id: 14,
    firstName: 'Wendy',
    lastName: 'Testaburger',
    githubUsername: 'wendytweaks',
    email: 'wendy.testaburger@southpark.com'
  },
  {
    id: 15,
    firstName: 'Butters',
    lastName: 'Stotch',
    githubUsername: 'butterstotch',
    email: 'butters.stotch@southpark.com'
  },
  {
    id: 16,
    firstName: 'Summer',
    lastName: 'Smith',
    githubUsername: 'summersmith',
    email: 'summer.smith@citadel.com'
  },
  {
    id: 17,
    firstName: 'Beth',
    lastName: 'Smith',
    githubUsername: 'beth_sanchez',
    email: 'beth.smith@citadel.com'
  },
  {
    id: 18,
    firstName: 'Scruffy',
    lastName: 'the Janitor',
    githubUsername: 'scruffy',
    email: 'scruffy.janitor@citadel.com'
  },
  {
    id: 19,
    firstName: 'Principal',
    lastName: 'Skinner',
    githubUsername: 'skinneradmin',
    email: 'seymour.skinner@springfield.edu'
  },
  {
    id: 20,
    firstName: 'Nelson',
    lastName: 'Muntz',
    githubUsername: 'nelsonmuntz',
    email: 'nelson.muntz@springfield.edu'
  },
  {
    id: 21,
    firstName: 'Ralph',
    lastName: 'Wiggum',
    githubUsername: 'ralphwiggum',
    email: 'ralph.wiggum@springfield.edu'
  },
  {
    id: 22,
    firstName: 'Superintendent',
    lastName: 'Chalmers',
    githubUsername: 'superchalmers',
    email: 'chalmers@springfield.edu'
  },
  {
    id: 23,
    firstName: 'Apu',
    lastName: 'Nahasapeemapetilon',
    githubUsername: 'apunahas',
    email: 'apu@kwikiemart.com'
  },
  {
    id: 24,
    firstName: 'Moe',
    lastName: 'Szyslak',
    githubUsername: 'moeszyslak',
    email: 'moe@tavern.com'
  },
  {
    id: 25,
    firstName: 'Cletus',
    lastName: 'Spuckler',
    githubUsername: 'cletusfarm',
    email: 'cletus@spucklerfarm.com'
  },
  {
    id: 26,
    firstName: 'Barney',
    lastName: 'Gumble',
    githubUsername: 'barneygumble',
    email: 'barney.gumble@moe.com'
  },
  {
    id: 27,
    firstName: 'Sideshow',
    lastName: 'Bob',
    githubUsername: 'sideshowbob',
    email: 'sideshowbob@krustyland.com'
  },
  {
    id: 28,
    firstName: 'Krusty',
    lastName: 'Clown',
    githubUsername: 'krustytheclown',
    email: 'krusty@krustyland.com'
  },
  {
    id: 29,
    firstName: 'Charles',
    lastName: 'Burns',
    githubUsername: 'mrburns',
    email: 'burns@springfieldnuclear.com'
  },
  {
    id: 30,
    firstName: 'Snake',
    lastName: 'Jailbird',
    githubUsername: 'snakejailbird',
    email: 'snake@springfieldprison.com'
  },
  {
    id: 31,
    firstName: 'Chief',
    lastName: 'Wiggum',
    githubUsername: 'chiefwiggum',
    email: 'wiggum@springfieldpd.com'
  },
  {
    id: 32,
    firstName: 'Leopold',
    lastName: 'Stotch',
    githubUsername: 'leopoldstotch',
    email: 'leopold.stotch@southpark.com'
  },
  {
    id: 33,
    firstName: 'Token',
    lastName: 'Black',
    githubUsername: 'tokenblack',
    email: 'token.black@southpark.com'
  },
  {
    id: 34,
    firstName: 'Tweek',
    lastName: 'Tweaky',
    githubUsername: 'tweektweak',
    email: 'tweek@tweakscoffee.com'
  },
  {
    id: 35,
    firstName: 'Craig',
    lastName: 'Tucker',
    githubUsername: 'craigtucker',
    email: 'craig@southpark.com'
  },
  {
    id: 36,
    firstName: 'Birdperson',
    lastName: 'Bird',
    githubUsername: 'birdperson',
    email: 'birdperson@citadel.com'
  },
  {
    id: 37,
    firstName: 'Squirrely',
    lastName: 'Squirrel',
    githubUsername: 'squirrelydan',
    email: 'squirrelydan@citadel.com'
  },
  {
    id: 38,
    firstName: 'Poopybutthole',
    lastName: 'Boopyputhole',
    githubUsername: 'mrpoopybutthole',
    email: 'mrpoopybutthole@citadel.com'
  },
  {
    id: 39,
    firstName: 'Goldenfold',
    lastName: 'FoldedGold',
    githubUsername: 'goldenfold',
    email: 'goldenfold@citadel.com'
  },
  {
    id: 40,
    firstName: 'NoobNoob',
    lastName: 'Nobs',
    githubUsername: 'noobnoob',
    email: 'noobNoob@citadel.com'
  },
  {
    id: 41,
    firstName: 'Meseeks',
    lastName: 'Youfind',
    githubUsername: 'mrmeeseeks',
    email: 'mrmeeseeks@citadel.com'
  },
  {
    id: 42,
    firstName: 'Pickle Rick',
    lastName: 'Sanchez',
    githubUsername: 'picklerick',
    email: 'picklerick@pickledimension.com'
  },
  {
    id: 43,
    firstName: 'Gene',
    lastName: 'Belcher',
    githubUsername: 'genethegenius',
    email: 'gene.belcher@wagstaff.edu'
  },
  {
    id: 44,
    firstName: 'Louise',
    lastName: 'Belcher',
    githubUsername: 'louisebelcher',
    email: 'louise.belcher@wagstaff.edu'
  },
  {
    id: 45,
    firstName: 'Tina',
    lastName: 'Belcher',
    githubUsername: 'tinabelcher',
    email: 'tina.belcher@wagstaff.edu'
  },
  {
    id: 46,
    firstName: 'Bob',
    lastName: 'Belcher',
    githubUsername: 'bobbobbob',
    email: 'bob.belcher@bobsburgers.com'
  },
  {
    id: 47,
    firstName: 'Linda',
    lastName: 'Belcher',
    githubUsername: 'lindaloo',
    email: 'linda.belcher@bobsburgers.com'
  },
  {
    id: 48,
    firstName: 'Teddy',
    lastName: 'Bear',
    githubUsername: 'teddyteddybear',
    email: 'teddy@bobsburgers.com'
  },
  {
    id: 49,
    firstName: 'Zeke',
    lastName: 'Zek',
    githubUsername: 'zekezeke',
    email: 'zeke@wagstaff.edu'
  },
  {
    id: 50,
    firstName: 'Jimmy',
    lastName: 'PestoJr.',
    githubUsername: 'jimmypesto',
    email: 'jimmy.pesto@wagstaff.edu'
  },
  {
    id: 51,
    firstName: 'Tammy',
    lastName: 'Larsen',
    githubUsername: 'tamlarsen',
    email: 'tammy.larsen@wagstaff.edu'
  },
  {
    id: 52,
    firstName: 'Regular',
    lastName: 'SizedRudy',
    githubUsername: 'regularrudy',
    email: 'rudy@wagstaff.edu'
  },
  {
    id: 53,
    firstName: 'Darrell',
    lastName: 'Dare',
    githubUsername: 'darrelldare',
    email: 'darrell@wagstaff.edu'
  },
  {
    id: 54,
    firstName: 'Andy',
    lastName: 'Pesto',
    githubUsername: 'andyandy',
    email: 'andy.pesto@wagstaff.edu'
  },
  {
    id: 55,
    firstName: 'Ollie',
    lastName: 'Pesto',
    githubUsername: 'olliepesto',
    email: 'ollie.pesto@wagstaff.edu'
  },
  {
    id: 56,
    firstName: 'Logan',
    lastName: 'Bush',
    githubUsername: 'loganbush',
    email: 'logan.bush@wagstaff.edu'
  },
  {
    id: 57,
    firstName: 'Peter',
    lastName: 'Griffin',
    githubUsername: 'petergriffin',
    email: 'peter.griffin@quahog.edu'
  },
  {
    id: 58,
    firstName: 'Lois',
    lastName: 'Griffin',
    githubUsername: 'loisgriffin',
    email: 'lois.griffin@quahog.edu'
  },
  {
    id: 59,
    firstName: 'Meg',
    lastName: 'Griffin',
    githubUsername: 'meggriffin',
    email: 'meg.griffin@quahog.edu'
  },
  {
    id: 60,
    firstName: 'Chris',
    lastName: 'Griffin',
    githubUsername: 'chrisgriffin',
    email: 'chris.griffin@quahog.edu'
  },
  {
    id: 61,
    firstName: 'Stewie',
    lastName: 'Griffin',
    githubUsername: 'stewiegriffin',
    email: 'stewie.griffin@quahog.edu'
  },
  {
    id: 62,
    firstName: 'Brian',
    lastName: 'Griffin',
    githubUsername: 'briangriffin',
    email: 'brian.griffin@quahog.edu'
  },
  {
    id: 63,
    firstName: 'Glen',
    lastName: 'Quagmire',
    githubUsername: 'glenquagmire',
    email: 'quagmire@quahog.edu'
  },
  {
    id: 64,
    firstName: 'Joe',
    lastName: 'Swanson',
    githubUsername: 'joeswanson',
    email: 'joe.swanson@quahog.edu'
  },
  {
    id: 65,
    firstName: 'Cleveland',
    lastName: 'Brown',
    githubUsername: 'clevelandbrown',
    email: 'cleveland.brown@quahog.edu'
  },
  {
    id: 66,
    firstName: 'Herbert',
    lastName: 'Cook',
    githubUsername: 'herbert',
    email: 'herbert@quahog.edu'
  },
  {
    id: 67,
    firstName: 'Carter',
    lastName: 'Pewterschmidt',
    githubUsername: 'carterp',
    email: 'carter.pewterschmidt@quahog.edu'
  },
  {
    id: 68,
    firstName: 'Angela',
    lastName: 'Merkel',
    githubUsername: 'angela',
    email: 'angela@quahog.edu'
  },
  {
    id: 69,
    firstName: 'Tom',
    lastName: 'Tucker',
    githubUsername: 'tomtucker',
    email: 'tom.tucker@quahog.edu'
  },
  {
    id: 70,
    firstName: 'Diane',
    lastName: 'Simmons',
    githubUsername: 'dianesimmons',
    email: 'diane.simmons@quahog.edu'
  },
  {
    id: 71,
    firstName: 'Bruce',
    lastName: 'Dickinson',
    githubUsername: 'bruce',
    email: 'bruce@quahog.edu'
  },
  {
    id: 72,
    firstName: 'Consuela',
    lastName: 'Clean',
    githubUsername: 'consuela',
    email: 'consuela@quahog.edu'
  },
  {
    id: 73,
    firstName: 'Tricia',
    lastName: 'Takanawa',
    githubUsername: 'tricia',
    email: 'tricia.takanawa@quahog.edu'
  },
  {
    id: 74,
    firstName: 'Neil',
    lastName: 'Goldman',
    githubUsername: 'neil',
    email: 'neil.goldman@quahog.edu'
  },
  {
    id: 75,
    firstName: 'Bruce',
    lastName: 'Wayne',
    githubUsername: 'batman',
    email: 'bruce.wayne@wayneenterprises.com'
  }
]

export default students
