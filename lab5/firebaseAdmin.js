
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const admin = require('firebase-admin');
const serviceAccount = require('./my_backend/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export  { db };
