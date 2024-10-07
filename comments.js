// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments array from comments.js
const comments = require('./comments');