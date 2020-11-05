// player stats
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

alert("Welcome to Robot Gladiators!");
var playerName = window.prompt("What is your robot's name?");

//ask user if they want to skip or fight
var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

// //would you like to fight
// var fight = function(enemyNames) {
//     while (enemyHealth > 0 && playerHealth > 0);
    
//     if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") 

//     console.log(promptFight);

//     //function start a new game
// var startGame = function() {
//     for (var i=0; i <enemyNames.length; i++) {

//     //reset player stats
//     playerHealth = 100;
//     playerAttack = 10;
//     playerMoney = 10;

   
//        if (playerHealth > 0 && i < enemyNames.length -1) {
//            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
//            if (storeConfirm) {
//            shop();
//            }
//         }
//            window.alert("Welcome to Robot Gladiators! Round" + (i +1));

//         var pickedEnemyName = enemyNames[i];

//         enemyHealth = 50;

//         fight(pickedEnemyName);

//         if (i<enemyNames.length -1) {
//             shop();
//         }
//         }
//        }
//         else {
//            window.alert("You have lost your robot in battle! Game Over");
//            break;
        
//     startGame();
//     // function to end game
//     var endGame =function () {

//     //in player is still alive, player wins
//     if (playerHealth > 0) {
//         window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
//     }
//     else {
//         window.alert("You've lost your robot in battle.");
//     }
//     }
//     // ask player if the'd like to play again
//     var playAgainConfirm = window.confirm("Would you like to play again?");
//     if (playAgainConfirm) {
//         //restart game
//         startGame();
//     }
//     else {
//         window.alert("Thank you for playing Robot Gladiators! Come back soon");
//     }
//     }
//     window.alert("The game has now ended. Let's see how you did!");
//     endGame();
// };
// var shop = function() {
//     var shopOptionPrompt = window.prompt (
//         "Would you like to REFILL your health, UPGRADE your attack, or leave the stor? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

//         if (shopOptionPromp === "refill"|| shopOptionPrompt === "REFILL"|| shopOptionPrompt === "Refill")
//         {          
//         }
// //use switch to carry out action
// switch (shopOptionPrompt) {
//     case "REFILL"
//     case "refill":
//         if (playerMoney >= 7) {
//         window.alert("Refilling player's health by 20 for 7 dollars.");
        
//         //increase health and decrease money
//         playerHealth=playerHealth + 20;
//         playerMoney=playerMoney -7;
//         }
//         else {
//             window.alert("You don't have enough money!");
//         }
//         break;
//         case "upgrade":
//             if (playerMoney>= 7) {
//             window.alert("Upgrading player's attack by 6 for 7 dollars.");

//             //increase attack and decrease money
//             playerAttack = playerAttack + 6;
//             playerMoney = playerMoney - 7;
//             }
//             else {
//                 window.alert("You don't have enough money!");
//             }
//             break;

//             case "leave":
//                 window.alert("Leaving the store.");
//                 //do nothing, so function will end
//                 break;
//                 default:
//                     window.alert("You did not pick a valid option. Try again.");
//                     //call shop again to force player to pick a valid option
//                     shop();
//                     break;
// }
// }
//     };
// }


//     // if player chooses to skip
//   if (promptFight === "skip" || promptFight === "SKIP") {
// // confirm player wants to skip
//     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
// // if yes (true), leave fight
//       if(confirmSkip) {
//     window.alert(playerName + "has decided to skip this fight. Goodbye!");
//     // subtract money from the playerMoney for skipping
//     playerMoney = playerMoney - 10;
//     console.log("playerMoney", playerMoney);
//     break;
//     }

// //remove enemy's health by subtracting the amount set in the player attack variable
// enemyHealth = enemyHealth - playerAttack;
// console.log(
//     playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining.");

//  // check enemy's health*/
//  if (enemyHealth <= 0) {
//     window.alert(enemyNames + "has died!");

//     //award player for winning
//     playerMoney = playerMoney + 20;

//     //leave while () loop since enemy is dead
//     break;
// } else {
//  window.alert(enemyNames + "still has" + enemyHealth + "health left.");
// }
// //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
//     playerHealth = playerHealth - enemyAttack;
    
// //Log a resulting message to the console so we know that it worked.
//     console.log(enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining");
// //check players health
//     if (playerHealth <=0) {
//         window.alert(playerName + "has died!");
//         //leave while ()loop if player is dead
//         break;
//  } else {
//     window.alert(playerName + "still has" + playerHealth + "health left.");
//  }
// }
// };

// //if no (false), ask question again by running fight() again
// else {
//  fight();

// //window.alert(playerName + "has chosen to skip the fight!");
// } else {
// window.alert("You need to pick a valid option. Try again!");

//   } else { 
//         window.alert(playerName + "still has" + playerHealth + "health left.");
    
    
//     //Subtract the value of "playerAttack" from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
//     console.log(enemyHealth = enemyHealth - playerAttack);
    
//     //Log a resulting message to the console so we know that it worked.
//     console.log(playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining.");
    
//     //Check enemys health
//     if(enemyHealth <= 0) {
//         window.alert(enemyName + "has died");
//     }
//      else { 
//         window.alert(enemyNames + "still has" + enemyHealth + "health left.");
//      }
//     //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
//     playerHealth = playerHealth - enemyAttack;
    
//     //Log a resulting message to the console so we know that it worked.
//     console.log(enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining");
    
//     //check player's health
//     if(playerHealth <=0) {
//         window.alert(playerName + "has died");
//     }else {
//         window.alert(playerName + "still has" + playerHealth + "health left.");
//     }
      
// }
// fight(enemyRobot);
// startGame();