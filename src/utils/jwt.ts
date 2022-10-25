import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import config from '../config';
export const signJwt = (payload: Object, key: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey', options: SignOptions = {}) => {
    const privateKey = config[key] as string;
    return jwt.sign(payload, privateKey, { ...options })
};
export const verifyJwt = <T>(token: string, key: 'accessTokenPublicKey' | 'refreshTokenPublicKey'): T | null => {
    try {
        const publicKey = config[key] as string
        return jwt.verify(token, publicKey as string) as T;
    } catch (error) {
        return null;
    }
};