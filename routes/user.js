const router=require('express').Router();

router.get('/userTest', (req, res)=>{
     res.send("user is working");
})

router.post('/userposttest', (req, res)=>{
    const username = req.body.username;
    console.log(username)
})



module.exports = router;