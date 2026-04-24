const express = require('express')
const router = express.Router()

const{
    getPeople,
 createPerson,
 createPersonPostman,
 updatePerson,
 deletePerson
} = require('../controllers/people')

//router.get('/',getPeople)// fn refrence
//router.post('/',createPerson)
//router.post('api/postman/people',createPersonPostman)
//router.put(':id',updatePerson)
//router.delete('api/people/id',deletePerson)

// DIFFRENT WAY TO SETUP THE ROUTRES BY THE WAY THERES A PATTERN FIRST BASIC EXPRESS THE MIDDLEWARE  THEN METHOD ONE BY ONE THEN ALL THE METHODS THEN USE IN ROUTES THEN IN CONTROOLERS ALL THE METHODS MIDDLEWARE

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)
module.exports = router


// for taking care of this we have controllers