// PORT
process.env.PORT = process.env.PORT || 3000;

// ENVIROMENT
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// DB
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;

}

process.env.URLDB = urlDB;


// EXPIRED TOKEN
//{ expiresIn: 60 * 60 * 24 * 30 }
process.env.EXPIRED_TOKEN = '48h';


//SEED
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';