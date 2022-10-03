import { Candy } from "../models/candy.js";

function index(req, res) {
  Candy.find({})
    .then((candies) => {
      res.render("candies/index", {
        candies,
        title: "Candies",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function create(req, res) {
  req.body.owner = req.user.profile._id;
  req.body.tasty = !!req.body.tasty;
  Candy.create(req.body)
    .then((candy) => {
      res.redirect("/candies");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/candies");
    });
}

function show(req, res) {
  Candy.findById(req.params.id)
    .populate("owner")
    .then((candy) => {
      res.render("candies/show", {
        candy,
        title: "Candy Details",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/candies");
    });
}

function edit(req, res) {
  Candy.findById(req.params.id)
    .then((candy) => {
      res.render("candies/edit", {
        candy,
        title: "Edit Candy",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function update(req, res) {
  Candy.findByIdAndUpdate(req.params.id, req.body)
    .then(candy => {
      console.log("candy", candy);
      res.redirect(`/candies/${candy._id}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect(`/candies`);
    });
}

function deleteCandy(req, res) {
  Candy.findById(req.params.id)
  .then(candy => {
    console.log(candy.owner, req.user.profile._id)
    if (candy.owner.equals(req.user.profile._id)) {
      candy.delete()
      .then(deleteCandy => {
        res.redirect('/candies')
      })
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/candies')
  })
}

export {
  index,
  create, 
  show, 
  edit, 
  update,
  deleteCandy as delete,
  };
