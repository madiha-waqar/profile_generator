const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name, qualification, codingtime, song, snack, sport, superpower;

rl.question('What\'s your name?\n', (answer) => {
  name = answer;
  console.log(`Hi ${name}!`);

  rl.question('What\'s your qualification? ', (answer) => {
    qualification = answer;
    console.log(`Cool!`);

    rl.question('For how long have you been coding? ', (answer) => {
      codingtime = answer;

      rl.question('What do you listen to while coding? ', (answer) => {
        song = answer;

        rl.question('Which\'s your favourite snack?', (answer) => {
          snack = answer;
          console.log(`Yummy!`);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              superpower = answer;
              console.log(`Amazing!!`);

              setTimeout(() => {
                console.log(`Thank you for your time ${name}. We got all the basic information to get us started. Just to recap:\nYour name is ${name}, and your qualification is ${qualification}. 
                You have been coding for ${codingtime} and likes to listen to ${song} while coding. Your favourite snack is ${snack} and your favourite sports is ${sport}. Its nice to know your superpowers are ${superpower} 
                as we could really use some of that :) Good luck!`);
              }, 1000);

              rl.close();

            });
          });
        });
      });
    });
  });
});

