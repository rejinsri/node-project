// server/utils/cryptoUtils.js

const crypto = require('crypto');

// Define your encryption algorithm
const algorithm = 'aes-256-cbc';

// Function to encrypt text
const encrypt = (text, key, iv) => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
};

// Function to decrypt text
const decrypt = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(Buffer.from(encryptedText, 'hex'));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

// Export the functions
module.exports = { encrypt, decrypt };
