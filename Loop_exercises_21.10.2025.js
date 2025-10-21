//Exercise 1

const worldLeaders = [
  {name: "Kristersson", title: "Prime Minister", country: "sweden", greeting: "hej" },
  {name: "Macron", title: "President", country: "France", greeting: "Bonjour" },
  {name: "Kishda", title: "Prime Minister", country: "Japan", greeting: "Konnichiwa" },
  {name: "Steinmeir", title: "President", country: "Germany", greeting: "Guten Tag" }
];

while (worldLeaders.length > 0) {
  const leader = worldLeaders.shift();
  console.log(`${leader.greeting}, I am ${leader.name}, the ${leader.title} of ${leader.country}.`);
}


// Exercise 2


const orders = [
  {drink: "Latte", espressoShots: 2, syrupPumps: 2, basePrice: 3.50},
  {drink: "Cappucino", espressoShots: 1, syrupPumps: 0, basePrice: 3.00},
  {drink: "Mocha", espressoShots: 3, syrupPumps: 3, basePrice: 4.00},
  "STOP",
  {drink: "Americano", espressoShots: 2, syrupPumps: 1, basePrice: 2.50}
];

let currentOrder = 0;

while (currentOrder < orders.length) {
  const order = orders[currentOrder];
  currentOrder++;
  if (order === "STOP") {
    break;
  }

  const totalPrice = order.basePrice + (order.espressoShots * 0.5) + (order.syrupPumps * 0.3);
  console.log(`${order.drink}: $${totalPrice.toFixed(2)} (base $${order.basePrice} + ${order.espressoShots} shots + ${order.syrupPumps} Pumps)`);

  
}

// Exercise 3


const gamers = [
   {username:"DragonSlayer", baseAttack: 20, powerUpMultiplier: 2, bonusAttack: 15},
   {username:"NinjaKid", baseAttack: 60, powerUpMultiplier: 1.5, bonusAttack: 30},
   {username:"WizardPro", baseAttack: 60, powerUpMultiplier: 3, bonusAttack: 25},
   {username:"TankMaster", baseAttack: 80, powerUpMultiplier: 1.2, bonusAttack: 10},
 ]

const boostedGamers = gamers.map(function(gamer) {
  const finalAttack = (gamer.baseAttack * gamer.powerUpMultiplier) + gamer.bonusAttack;
  let emoji = '';
  if (finalAttack > 100) {
    emoji = '🪫';
  } else if (finalAttack >= 50) {
    emoji = '🧯';
  } else {
    emoji = '🚬';
  }
  return {
    username: gamer.username,
    baseAttack: gamer.baseAttack,
    powerUpMultiplier: gamer.powerUpMultiplier,
    bonusAttack: gamer.bonusAttack,
    finalAttack,
    emoji
  };
});
boostedGamers.forEach(function(gamer) {
  console.log(`${gamer.username}: ${gamer.finalAttack} attack ${gamer.emoji}`);
});


// Exercise 4


const movieReview = [
    {reviewer: "sarah", movie: "Space Warriors", rating: 4.5},
    {reviewer: "Mike", movie: "The Lost City", rating: 2.8},
    {reviewer: "Emma", movie: "Laugh Factory", rating: 3.7},
    {reviewer: "David", movie: "Mystery Island", rating: 4.9},
    {reviewer: "Lisa", movie: "Robot Revolution", rating: 2.1}
];

const formattedReviews = movieReview.map(function(review) {
    let recommendation = '';
    if (review.rating >= 4.0) {
        recommendation = '❤️❤️❤️❤️❤️ MUSTWATCH!';
    } else if (review.rating >= 3.0) {
        recommendation = '❤️❤️❤️ GOOD';
    } else {
        recommendation = '❤️ SKIP';
    }
    
    return `${review.reviewer} says ${review.movie} ${recommendation}`;
});

formattedReviews.forEach(function(review) {
    console.log(review);
});
