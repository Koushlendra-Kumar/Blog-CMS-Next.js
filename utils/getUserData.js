'use client'
const getUserData = (str) => {
  return window.sessionStorage.getItem(str);
};

export default getUserData;
