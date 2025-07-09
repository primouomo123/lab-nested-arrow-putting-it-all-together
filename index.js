//Creation of the object including the username and password
const userInfo = {
    "username": "user1",
    "password": "password123"
}

//This is the function to track the login attempts
function createLoginTracker(userInfo) {
  let attemptCount = 0; // This is the counter of attempts

  //This is the arrow function with the passwordAttempt parameter with all the conditionals
  const loginAttempt = (passwordAttempt) => {
    if (passwordAttempt === userInfo.password) {
      return 'Login successful'; //This is the result if the user types the correct password
    } else {
      attemptCount++;
      if (attemptCount <= 3) {
        return `Attempt ${attemptCount}: Login failed`; //This is to show the count of all failed attempts (up to 3 failed attempts)
        
      }
      if (attemptCount >= 3) {
        return 'Account locked due to too many failed login attempts' /*This is the final message, in case the user tried 3 times
        and his account is now locked*/
      }

    }
  };

  return loginAttempt;
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};