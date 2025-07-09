//This is the readline interface
const { stdin, stdout, rawListeners } = require("process");

const readline = require(`readline`).createInterface({
  input: stdin,
  output: stdout
});

//Creation of the object including the username and password
const userInfo = {
  userName: "user1",
  password: "password123"
}

//This is the creation of the variable to store the password the user will type
let passwordAttempt

//This is the function to track the login attempts
function createLoginTracker(userInfo) {

    let attemptCount = 0

    const loginAttempt = (passwordAttempt) => {
        if (passwordAttempt === userInfo.password) {
            console.log('Login successful') //This is the result if the user types the correct password
            readline.close();
            return
        }

        else {
            attemptCount++; //When the password is incorrect, the count starts increasing by 1
            if (attemptCount < 3) {
                console.log(`Attempt ${attemptCount}: Login failed`) //This is to show the count of all failed attempts (up to 2 failed attempts)
                readline.question(`Please enter password again`, (inputPassword) => { //This is the question to let the user retype the password
                    passwordAttempt = inputPassword; //I save the user password in the variable named passwordAttempt
                    loginAttempt(passwordAttempt); /*I call the arrow function again to repeat the process until the user types the right
                    password or until the account is locked after 3 failed times.*/
                })
            }
            
            else if (attemptCount >= 3) {
                console.log(`Attempt ${attemptCount}: Login failed`) //This is to show that the 3rd attempt failed
                console.log('Account locked due to too many failed login attempts') //This is to show that the account is locked
                readline.close();
            }
        }
    }

    readline.question(`Welcome, ${userInfo.userName}! Please type your password`, (inputPassword) => {/*This is the question when the 
        user starts the program*/
        passwordAttempt = inputPassword; //This is the variable used to store the passwordAttempt

        loginAttempt(passwordAttempt) //Here I call the arrow function 
    })
}

createLoginTracker(userInfo); //Here I call the createLoginTracker function