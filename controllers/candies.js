import { Candy } from '../models/candy.js'

function index(req, res) {
  Candy.find({})
  .then(candies => {
    res.render('candies/index', {
      candies,
      title: "Candies"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
	req.body.tasty = !!req.body.tasty
  Candy.create(req.body)
  .then(candy => {
    res.redirect('/candies')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/candies')
  })
}

export {
  index,
  create
}