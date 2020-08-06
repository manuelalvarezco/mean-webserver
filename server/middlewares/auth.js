const jwt = require('jsonwebtoken');

//Verificar token

let verifyToken = (req, res, next) => {

    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.user = decoded.user;
        next();
    })
}



//Verifica AdminRole
let verifyAdminRole = (req, res, next) => {

    let user = req.user;

    if (user.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no tiene permisos'
            }
        })
    }


}

//Verifica token imagen
let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            })
        }

        req.user = decoded.user;
        next();
    })
}



module.exports = {
    verifyToken,
    verifyAdminRole,
    verificaTokenImg
}