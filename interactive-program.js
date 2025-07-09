const { stdin, stdout, rawListeners } = require("process");

const readline = require(`readline`).createInterface({
  input: stdin,
  output: stdout
});

const userInfo = {
  userName: "user1",
  password: "password123"
}

let passwordAttempt

function createLoginTracker(userInfo) {

    let attemptCount = 0

    const loginAttempt = (passwordAttempt) => {
        if (passwordAttempt === userInfo.password) {
            console.log('Login successful')
            readline.close();
            return
        }

        else {
            attemptCount++;
            if (attemptCount < 3) {
                console.log(`Attempt ${attemptCount}: Login failed`)
                readline.question(`Please enter password again`, (inputPassword) => {
                    passwordAttempt = inputPassword;
                    loginAttempt(passwordAttempt);
                })
            }
            
            else if (attemptCount >= 3) {
                console.log(`Attempt ${attemptCount}: Login failed`)
                console.log('Account locked due to too many failed login attempts')
                readline.close();
            }
        }
    }

    readline.question(`Welcome, ${userInfo.userName}! Please type your password`, (inputPassword) => {
        passwordAttempt = inputPassword;

        loginAttempt(passwordAttempt)
    })
}

createLoginTracker(userInfo);