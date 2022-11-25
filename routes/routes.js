const { response } = require('express');
const express = require('express');
const router = express.Router();
const funcionario = require('../controller/funcionarioController');
const cats = require('../controller/catsController')

router.get('/', (request, response)=>{
    response.json({
        message: "API Raças de Gatos"
    })
});

router.get('/allCats', cats.allCats);
router.get('/catsBreeds/:breed', cats.catsBreeds);
router.get('/catsCountry/:country', cats.catsCountry);


module.exports = router;