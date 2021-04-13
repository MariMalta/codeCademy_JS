let raceNumber = Math.floor(Math.random() * 1000);
let registration = true;
let runnerAge = 15;

if (runnerAge > 18 && registration == true) {
    raceNumber += 1000;
    console.log(`Runner ${raceNumber}, the race will start at 9:30AM.`);
}
else if (runnerAge > 18 && registration == false) {
    console.log(`Runner ${raceNumber}, the race will start at 11:00AM`);
}
else if (runnerAge < 18) {
    console.log(`Runner ${raceNumber}, the race will start at 12:30AM`);
}
else {
    console.log(`Runner ${raceNumber}, go see the registration desk.`);
}