const express = require('express');
const router = express.Router();

router.get('/signout', async (req, res) => {
    try {
        
        res.status(200)
        .cookie("token", null, {expires: new Date(Date.now()), httpOnly: true})
        .json({
            success: true,
            massage: "sign Out",
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            massage: error.massage,
        })
    }
})

module.exports = router