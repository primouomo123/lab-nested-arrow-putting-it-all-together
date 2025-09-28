const userInfo = {
    "username": "user1",
    "password": "password123"
}

function createLoginTracker(userInfo){
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if(passwordAttempt === userInfo.password && attemptCount < 3) {
      return "Login successful";
    } else if(passwordAttempt !== userInfo.password && attemptCount < 3) {
      attemptCount++;
      return `Attempt ${attemptCount}: Login failed`;
    } else if (passwordAttempt !== userInfo.password && attemptCount >= 3) {
      attemptCount++;
      return "Account locked due to too many failed login attempts";
    }
  }

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};