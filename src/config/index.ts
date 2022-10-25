import evn from './custom-environment-variables';
export default {
    ...evn,
    port: 8001,
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
    origin: ['http://localhost:3000'],
};