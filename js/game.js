var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//ask user if they want to skip or fight
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");

//would you like to fight
var fight = function(enemyNames) {
    while (enemyHealth > 0 && playerHealth > 0);
    
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") 

    console.log(promptFight);

    //function start a new game
var startGame = function() {
    for (var i=0; i <enemyNames.length; i++) {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

   
       if (playerHealth > 0) {
           window.alert("Welcome to Robot Gladiators! Round" + (i +1));

        var pickedEnemyName = enemyNames[i];

        enemyHealth = 50;

        fight(pickedEnemyName);
       }
       else {
           window.alert("You have lost your robot in battle! Game Over");
           break;
       }
    }
    startGame();
    // function to end game
    var endGame =function () {

    //in player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    }
    // ask player if the'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon");
    }
    }
    window.alert("The game has now ended. Let's see how you did!");
    endGame();
};


    // if player chooses to skip
  if (promptFight === "skip" || promptFight === "SKIP") {
// confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
// if yes (true), leave fight
      if(confirmSkip) {
    window.alert(playerName + "has decided to skip this fight. Goodbye!");
    // subtract money from the playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    }
}
//remove enemy's health by subtracting the amount set in the player attack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining.");

 // check enemy's health*/
 if (enemyHealth <= 0) {
    window.alert(enemyNames + "has died!");

    //award player for winning
    playerMoney = playerMoney + 20;

    //leave while () loop since enemy is dead
    break;
} else {
 window.alert(enemyNames + "still has" + enemyHealth + "health left.");
}
//Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    
//Log a resulting message to the console so we know that it worked.
    console.log(enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining");
//check players health
    if (playerHealth <=0) {
        window.alert(playerName + "has died!");
        //leave while ()loop if player is dead
        break;
 } else {
    window.alert(playerName + "still has" + playerHealth + "health left.");
 }
}
};

//if no (false), ask question again by running fight() again
else {
 fight();

//window.alert(playerName + "has chosen to skip the fight!");
} else {
window.alert("You need to pick a valid option. Try again!");

  } else { 
        window.alert(playerName + "still has" + playerHealth + "health left.");
    
    
    //Subtract the value of "playerAttack" from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    console.log(enemyHealth = enemyHealth - playerAttack);
    
    //Log a resulting message to the console so we know that it worked.
    console.log(playerName + "attacked" + enemyNames + "." + enemyNames + "now has" + enemyHealth + "health remaining.");
    
    //Check enemys health
    if(enemyHealth <= 0) {
        window.alert(enemyName + "has died");
    }
     else { 
        window.alert(enemyNames + "still has" + enemyHealth + "health left.");
     }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    
    //Log a resulting message to the console so we know that it worked.
    console.log(enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining");
    
    //check player's health
    if(playerHealth <=0) {
        window.alert(playerName + "has died");
    }else {
        window.alert(playerName + "still has" + playerHealth + "health left.");
    }

        
}
fight(enemyRobot);