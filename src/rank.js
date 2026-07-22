//  # 2️- Challenge - Ranked Match Calculator
// What to use

// - Variables
// - Operators
// - Loops
// - Decision structures
// - Functions

// ## Objective:

// Create a function that takes a player's number of wins and losses as parameters,
// then returns the result to a variable; the ranked balance is calculated as (wins - losses).

// If wins are less than 10 = Iron
// If wins are between 11 and 20 = Bronze
// If wins are between 21 and 50 = Silver
// If wins are between 51 and 80 = Gold
// If wins are between 81 and 90 = Diamond
// If wins are between 91 and 100 = Legendary
// If wins are 101 or greater = Immortal

// ## Output

// At the end, display a message:
// "The Hero has a balance of **{winBalance}** and is at the **{level}** level"

function calculateRank(victories, defeats) {
    const score = victories - defeats;
    let level = "";

    if (victories < 10) {
        level = "Iron";
    } else if (victories <= 20) {
        level = "Bronze";
    } else if (victories <= 50) {
        level = "Silver";
    } else if (victories <= 80) {
        level = "Gold";
    } else if (victories <= 90) {
        level = "Diamond";
    } else if (victories <= 100) {
        level = "Legendary";
    } else {
        level = "Immortal";
    }

    return `Hero has a score of **${score}** and is at the level of **${level}**`;
}       

// My test cases
const victories = 125;
const defeats = 10;
const result = calculateRank(victories, defeats);
console.log(result);


// I completed the challenge by creating a function called `calculateRank` that takes in two parameters: `victories` and `defeats`. The function calculates the score by subtracting defeats from victories and then determines the level based on the number of victories. Finally, it returns a formatted string that includes the score and level.