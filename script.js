const magicBook = {
  recipes: {
    golem: {
      bone: 10,
      stone: 100,
      nail: 100,
      poo: 53
    },
    littleDevil: {
      lava: 100,
      evil: 999,
    },
  },
};

const kitchen = {
  bone: 999,
  stone: 999,
  nail: 999,
  poo: 999,
  lava: 999,
  evil: 999,
  kettle: {
    material: 'metal',
    ingridients: {},
  },

  addIngridientToKettle(nameOfIngridient, amount) {
    if (kitchen[nameOfIngridient] < amount) {
      // alert('you take a lot of' + ' ' + nameOfIngridient);
      return false;
    }
    kitchen[nameOfIngridient] = kitchen[nameOfIngridient] - amount
    this.kettle.ingridients[nameOfIngridient] = amount;
    console.log(nameOfIngridient, amount);
    return true;
  },

  cook(recipe) {
    for (const key in recipe) {
      let added = this.addIngridientToKettle(key, recipe[key])
      if (!added) {
        console.log(kitchen);
        return;
      }
    }
    let res = this.kettle.ingridients;
    this.kettle.ingridients = {};
    console.log(res);
    console.log(kitchen);
    return res;
  },
};

kitchen.cook(magicBook.recipes.golem);
kitchen.cook(magicBook.recipes.littleDevil);
// kitchen.cook(magicBook.recipes.littleDevil);

