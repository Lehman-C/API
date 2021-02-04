const { Router } = require('express')
const router = Router ();

const movies = require ('../sample.json')
console.log(movies);

router.get('/',(req, res) => {
    res.json(movies)
})

router.post('/', (req,res) => {
    const { title, year}= req.body;
    if (title && year){
        res.json('saevd');
    }else{
        res.send('wrong request');
    }
   
});


module.exports = router;