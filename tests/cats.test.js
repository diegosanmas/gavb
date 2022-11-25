const app = require('../server');
const request = require('supertest');

test('Retorno de todos os dados', async()=>{
    const response = await request(app).get("/allCats");

    expect(response.statusCode).toEqual(200)
})

test('Retorno dos dados de acordo com uma raça específica', async()=>{
    const response = await request(app).get("/catsBreeds/Balinese");

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual([{
        "breed": "Balinese",
        "country": "developed in the United States (founding stock from Thailand)",
        "origin": "Crossbreed",
        "coat": "Long",
        "pattern": "Colorpoint"}])
    
})

test('Pesquisa com parametro invalido de raça', async()=>{
    const response = await request(app).get("/catsBreeds/abc");

    expect(response.statusCode).toEqual(404)
    
    expect(response.body).toEqual({"message": "Raça não identificada"})
    
})

test('Retorno dos dados de acordo com um país de origem específico', async()=>{
    const response = await request(app).get("/catsCountry/France");

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual([
        {
            "breed": "Chartreux",
            "country": "France",
            "origin": "Natural",
            "coat": "Short",
            "pattern": "Solid"
        },
        {
            "breed": "Chausie",
            "country": "France",
            "origin": "Hybrid",
            "coat": "Short",
            "pattern": "Ticked"
        }
    ])
    
})

test('Pesquisa com parametro invalido de país de origem', async()=>{
    const response = await request(app).get("/catsCountry/abc");

    expect(response.statusCode).toEqual(404)
    
    expect(response.body).toEqual({"message": "País de origem não identificado"})
    
})