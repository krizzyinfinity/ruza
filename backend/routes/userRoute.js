const express = require("express");
const router = express.Router();
const User = require("../models/users")

router.get("/getAdmin", async(req, res) => {
    try {
     const admin = await User.find({})
     return res.json({admin});
    } catch (error) {
     return res.status(400).json({message: error})
    }
 });


router.post("/admin", async(req, res) => {
    const {email, password} = req.body
    try {
        const newAdmin = await User.findOne({email:email, password:password})
        if(newAdmin) {
            const temp = {
                email: newAdmin.email
            }
            res.send(temp)
        console.log("user", temp)
         }
         else {
            return res.status(400).json({message: "ok"})
    }
 } catch (error) {
    console.log(error)
        return res.status(400).json({error})
        
    }
});

module.exports = router;