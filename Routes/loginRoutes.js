const express = require('express')
const router = express.Router()
const empData = require('../Models/EmployeeData')
const jwt = require('jsonwebtoken')
const cors = require('cors')


router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.use(cors())


router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        let token = null;

        if (email === 'user@gmail.com' && password === 'user') {
            // Database user found, use a different secret
            let payload = { email: email, password: password };
            token = jwt.sign(payload, 'reactempapp');
        } else if (email === 'admin@gmail.com' && password === 'admin') {
            let payload = { email: email, password: password };
            token = jwt.sign(payload, 'reactempapp');
        } else {
            // No matching credentials
            return res.status(401).send('Invalid credentials');
        }

        res.status(200).send({ message: 'success', token: token });
    }catch (error) {
        console.error('Error during login:', error);
        res.status(500).send(error);
    }
});
module.exports = router;