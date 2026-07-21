let heroName = "Aragorn";
let xp = 15000;
let level = "";

if (xp < 1000) {
    level = "Iron";

}

else if (xp <= 2000) {
    level = "Bronze";
}

else if (xp <= 5000) {
    level = "Silver";
}
else if (xp <= 8000) {
    level = "Gold";
}

else if (xp <= 9000) {
    level = "Platinum";
}

else if (xp <= 10000) {
    level = "Ascending";
}

else {
    level = "Demigod";
}

console.log(`The hero named ${heroName} is at level ${level}`);