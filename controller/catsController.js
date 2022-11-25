const axios = require('axios')

class eventCatsController {

    async allCats(request, response) {

        let gatos = await axios.get('https://catfact.ninja/breeds')
        response.status(200).send(gatos.data.data)
    }

    async catsBreeds(request, response) {

        try {
            let filter = '';
            if (request.params.breed) filter = request.params.breed
            let gatos = await axios.get('https://catfact.ninja/breeds');
            let allBreeds = gatos.data.data;
            let breed = allBreeds.filter(data => data.breed === filter)
            if (breed.length > 0) {
                response.status(200).send(breed)
            } else {
                response.status(404).send({'message':'Raça não identificada'})
            }
        } catch (error) {
            console.log(error)
        }
    }

    async catsCountry(request, response) {

        try {
            let filter = '';
            if (request.params.country) filter = request.params.country
            let gatos = await axios.get('https://catfact.ninja/breeds');
            let allBreeds = gatos.data.data;
            let country = allBreeds.filter(data => data.country === filter)
            if (country.length > 0) {
                response.status(200).send(country)
            } else {
                response.status(404).send({'message':'País de origem não identificado'})
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new eventCatsController();