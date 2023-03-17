function generatePassword(){
  const key = (Math.random() +1).toString(36).substring(2).substring(0,10);
  const newPassword = key.replace('n','@').replace('w','!').replace('i','+');

  return newPassword;
}

export {generatePassword};