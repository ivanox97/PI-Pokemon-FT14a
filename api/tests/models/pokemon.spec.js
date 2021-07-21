const { Type, Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });

      describe("Type", function () {
        it("creates type when parameter name is passed", function () {
          return Type.create({
            name: "poison",
          }).then((typo) => {
            expect(typo.name).to.equal("poison");
          });
        });
      });
      describe("Pokemon creation", function () {
        it("creates the pokemon correctly", function () {
          return Pokemon.create({
            name: "picachu",
            image:
              "https://www.ecestaticos.com/image/clipping/4eb2fe1b771826cf037b432e11352dea/la-curiosa-historia-del-perro-que-ayudo-a-una-mujer-enferma-a-volver-a-mover-el-brazo.jpg",
            id: "34567890",
            type: ["poison"],
            life: 34,
            attack: 23,
            defense: 12,
            speed: 11,
            height: 11,
            weight: 78,
          }).then((pokemon) => {
            expect(pokemon.weight).to.equal(78);
          });
        });
      });
      
    });
  });
  
});
