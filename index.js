const userInfo = {
    "username": "user1",
    "password": "password123"
}

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (passwordAttempt === userInfo.password) {
      return 'Login successful';
    } else {
      attemptCount++;
      if (attemptCount === 3) {
        return `Attempt ${attemptCount}: Login failed`;
      }
      if (attemptCount >= 3) {
        return 'Account locked due to too many failed login attempts';
      }
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return loginAttempt;
}



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};