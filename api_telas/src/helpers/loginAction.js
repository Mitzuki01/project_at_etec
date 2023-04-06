import jwt from 'jsonwebtoken'

function generatePassword(){
  const key = (Math.random() +1).toString(36).substring(2).substring(0,10);
  const newPassword = key.replace('n','@').replace('w','!').replace('i','+');

  return newPassword;
}

function GenerateToken(id_user, name_user, email , user , type_user){
  const myKey = "G@br131E1Lind01nv3j0s0d1zqEm3nt1r4"
  const token = jwt.sign(
    {id_user, name_user, email , user , type_user},
    myKey,
    {expiresIn: 60 * 2}

    )

    return token
}

export {generatePassword, GenerateToken};