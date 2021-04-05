const express = require('express');
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyDUFwADBrOfHaP81Z5RY65ADKQSZma8Io4',
  authDomain: 'fir-restful.firebaseapp.com',
  projectId: 'fir-restful',
  storageBucket: 'fir-restful.appspot.com',
  messagingSenderId: '605836973606',
  appId: '1:605836973606:web:4f3bce20dc3cd5d993f8e7',
  measurementId: 'G-RRDL4FHBGE',
  databaseURL: 'https://fir-restful-default-rtdb.firebaseio.com/',
};

firebase.initializeApp(firebaseConfig);

const router = express.Router();

router.get('/:ref', (req, res) => {
  const ref = firebase.database().ref(req.params.ref);
  res.header('Content-Type', 'application/json');
  ref.once('value', (snapshot) => {
    const data = snapshot.val();
    if (data == null) {
      res.send(JSON.stringify({
        message: 'Recieved null.'
      }, null, 2));
    } else {
      res.send(JSON.stringify(data, null, 2));
    }
  });
});

module.exports = router;
