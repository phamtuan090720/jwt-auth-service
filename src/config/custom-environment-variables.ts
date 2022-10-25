require('dotenv').config();
export default {
    dbName: process.env['MONGODB_USERNAME'],
    dbPass: process.env['MONGODB_PASSWORD'],
    accessTokenPrivateKey: process.env['ACCESS_TOKEN_PRIVATE_KEY'],
    accessTokenPublicKey: process.env['ACCESS_TOKEN_PUBLIC_KEY'],
    refreshTokenPrivateKey: process.env['REFRESH_TOKEN_PRIVATE_KEY'],
    refreshTokenPublicKey: process.env['REFRESH_TOKEN_PUBLIC_KEY'],
};