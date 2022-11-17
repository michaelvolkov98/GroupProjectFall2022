const faker = require("faker");

class MyFakerFunctions {

    static randomNumber(min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
        return faker.random.number(min, max);
      }



}
module.exports = MyFakerFunctions;