const { stdin, stdout, rawListeners } = require("process");

const readline = require(`readline`).createInterface({
  input: stdin,
  output: stdout
});

const userInfo = {
  userName: "user1",
  password: "password123"
}

function createLoginTracker(userInfo) {
  let attemptCount = 0;
let inputPassword;

  const loginAttempt = (passwordAttempt) => {
    if (attemptCount >= 3) {
      console.log("You've attempted to enter the wrong password many times. Your account has been locked. Please contact tech support");
      readline.close();
      return;
    }

    readline.question(`Welcome, ${userInfo.userName}! Please enter your password`, (inputPassword) => {
      if (inputPassword !== userInfo.password) {
        console.log("The username or password is incorrect")
      attemptCount++;
      loginAttempt();
      }

      else {
      console.log("You've succesfully logged in!")
      readline.close();
    }
    })
  }

  return loginAttempt(inputPassword);
}

createLoginTracker(userInfo);