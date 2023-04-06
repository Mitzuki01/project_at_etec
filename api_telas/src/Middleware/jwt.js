import jwt from 'jsonwebtoken'

// criar o token




// validar o token
function verifyToken(request, response, next){
    const myKey = "G@br131E1Lind01nv3j0s0d1zqEm3nt1r4"

    const authHeader = request.headers.authorization

    if(!authHeader){
        return response.status(401).send({message: "Token não enviado!"})
    }

    const part = authHeader.split(" ");

    if(part.lenght !== 2){
        return response.status(401).send({message: "Token no formato inválido!"})
    }

    const [format, token] = part;

    if(format !== 'Bearer'){
        return response.status(401).send({message: "Token não contém 'Bearer'"})
    }

    jwt.verify(token, myKey, (err, decoded) => {
        if(err){
            return response.status(401).send({message: "Sessão encerrada, usuário não está logado!"})
        }
        return next();
    })
}


// enviar token pro frontend




export default { verifyToken }
