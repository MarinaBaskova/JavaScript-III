

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject (argGame) {
  this.createdAt = argGame.createdAt;
  this.name = argGame.name;
  this.dimensions = argGame.dimensions;
}

// Methods of the GameObject
GameObject.prototype.destroy= function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats (argStats) {
  //gain access to all of the atributes in the GameObj constructor
  GameObject.call(this, argStats);
  this.healthPoints = argStats.healthPoints;
}

//inherit all methods from GameObj
CharacterStats.prototype = Object.create(GameObject.prototype);

//methods of the CharacterStats
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid (argHuman) {
  CharacterStats.call(this, argHuman);
  this.team = argHuman.team;
  this.weapons = argHuman.weapons;
  this.language = argHuman.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

//methods of the CharacterStats
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
};
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction(destroy helth) if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

// Vilain

function Vilain (atrVil) {
  Humanoid.call(this, atrVil);
  this.swordDamage = atrVil.swordDamage;
}

//inherit all methods 
Vilain.prototype = Object.create(Humanoid.prototype);


//Vilain method to remove health point from Hero

Vilain.prototype.attackWithSword = function (opponent) {

  let opponentHealth = opponent.healthPoints;
  //if health gets to 0 or drops below 0;
  if(this.healthPoints <= 0) {
    return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
  } else {
    opponent.healthPoints -= this.swordDamage;
    if(opponent.healthPoints <= 0) {
      return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
    } else {
      return `${opponent.name} you have been attacked by ${this.name} and your health is ${opponent.healthPoints}`;
    }
  }
};


//Hero 

function Hero (artHero) {
  Humanoid.call(this, artHero);
  this.arrowDamade= artHero.arrowDamade;
  this.arrowCount = artHero.arrowCount;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.shootArrow= function (opponent) {
  let opponentHealth = opponent.healthPoints;
  //if arrowCount gets to 0 or drops below 0;
  if(this.arrowCount <= 0) {
    return `${this.name} you have no more arrows to shoot`;
  } else {
    this.arrowCount -= 1;
    console.log(`${this.name} you have ${this.arrowCount} arrows left`);
  }
  //if health gets to 0 or drops below 0;
  if(this.healthPoints <= 0) {
    return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
  } else {
    opponent.healthPoints -= this.arrowDamade;
    if(opponent.healthPoints <= 0) {
      return `${opponent.name} the game is over for you and you have been killed by ${this.name}`;
    } else {
      return `${opponent.name} you have been attacked by ${this.name} and your health is ${opponent.healthPoints}`;
    }
  }
};


//obj from constructor functions Hero and Vilain

const heroOne = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'HeroPlayer1',
  team: 'Kingdom',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'English',
  arrowDamade: 2,
  arrowCount: 2
});

const vilainOne = new Vilain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'VilainPlayer1',
  team: 'Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'English',
  swordDamage: 5
});

console.log(vilainOne.attackWithSword(heroOne));
console.log(heroOne.shootArrow(vilainOne));
console.log(heroOne.shootArrow(vilainOne));
console.log(heroOne.shootArrow(vilainOne));
console.log(vilainOne.attackWithSword(heroOne));