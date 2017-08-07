const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

function randomValue(arrayName) {
  return arrayName[Math.floor(Math.random() * arrayName.length)];
}

app.listen(3000, () => {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/app', (req, res) => {
  var prefixes = ['Script', 'Cable', 'Disrupt', 'Innovate', 'Doge']
  var suffixes = ['.io', 'Bucket', 'Maker', 'Ly', 'Pan', 'Ware', 'Code']
  var buzz1 = ["n IOT", " Social Media", " Data Mining", " Cryptocurrency"]
  var buzz2 = ["deployment tools", "employees", "automated workflows"]
  var buzz3 =["frontend framework", "database", "web framework"]
  var pref = randomValue(prefixes)
  var suff = randomValue(suffixes)
  var buzzA = randomValue(buzz1)
  var buzzB = randomValue(buzz2)
  var buzzC = randomValue(buzz3)

  var json = {
    'appname': pref + suff,
    'description': 'A' + buzzA + ' app for managing your ' + buzzB + ' using the latest ' + buzzC + '.'
  }
  res.render('app.ejs', {app: json})
})

app.get('/update', (req, res) => {
  var titles = ['Exciting News!', 'A Minor Setback', 'A Quick Update']
  var intros = ['Greeting Backers!', 'Hello Supporters.', 'Dear Beloved Fans.']
  var adj = ['productive', 'hectic']
  var pivot = ['frontend', 'database']
  var users = ['mobile users', 'client health employees', 'web users']

  var title = randomValue(titles)
  var intro = randomValue(intros) + ' '
  var firstLine = "Things have been very " + randomValue(adj) + '. '
  var secondLine = "We recently decided to pivot to a new " + randomValue(pivot) +
    ', but rest assured, this was but a minor setback! '
  var thirdLine = "This change will go a long way to provide an optimal user experience for our " +
    randomValue(users) + '. '
  var ending = "Overall, we've been hard at work to provide adhere to your standards of quality." +
    " See you soon, The Team.";

  var json = {
    'title': title,
    'body': intro + firstLine + secondLine + thirdLine + ending
  }
  res.render('update.ejs', {update: json})
})
