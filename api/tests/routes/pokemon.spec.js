/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  id: 65995656,
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
  describe("GET /types", () => {
    it("should get 200", () => agent.get("/types").expect(200));
  });
});

describe("GET /pokemons", function () {
  it("How many pokemons i get", () => {
    return agent
      .get("/pokemons")
      .expect(200)
      .then((res) => {
        expect(res.body.length >= 40);
      });
  });
});

describe("GET /pokemons?name=xxx", () => {
  it("responds with  a string message, That pokemon does not exists.", () => {
    return agent
      .get("/pokemons?name=xxx")
      .expect(404)
      .expect((res) => {
        expect(res.text).to.be.deep.equal("That pokemon does not exists.");
      });
  });
});
