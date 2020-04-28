const functions = require('firebase-functions');
const express = require('express');
const app = express();



exports.helloWorld = functions.https.onRequest(app);