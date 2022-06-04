/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPassword, SALT);
}

// export function encodePassword(rawPassword: string) {
//   const algorithm = 'aes-256-cbc';
//   const initVector = crypto.randomBytes(16);
//   const message = rawPassword;
//   const Securitykey = crypto.randomBytes(32);
//   const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
//   let encryptedData = cipher.update(message, 'utf-8', 'hex');
//   encryptedData += cipher.final('hex');
//   console.log('Encrypted message: ' + encryptedData);
//   return encryptedData;
// }

export function comparePassword(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}

// export function comparePassword(encryptedData) {
//   const algorithm = 'aes-256-cbc';
//   //const encryptedData = 'd3396592f9401ae51b5cded7dc893841';
//   const initVector = crypto.randomBytes(16);
//   const Securitykey = crypto.randomBytes(32);
//   const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
//   let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
//   decryptedData += decipher.final('utf8');
//   console.log('Decrypted message: ' + decryptedData);
// }
