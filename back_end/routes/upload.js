const express = require('express');
const fileUpload = require('express-fileupload');
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.use(fileUpload());

router.post('/img' ,authenticate, (request, response)=>{
    console.log('request.body 123', request.body);
    console.log('request.id 123', request.id);
    
    console.log(request.files);
    if(request.files === null){
        return response.status(400).json({ msg : " no file uploaded"})
    }
    const file = request.files.file;
    const newPath = `${Date.now()}-${file.name}`
    file.mv(`${__dirname}/../../front_end/public/uploads/${newPath}` , (err)=>{
        if(err){
            console.log(err);
            return response.status(500).send(err);
        }
        response.json({ fileName : newPath ,filePath:`/uploads/${newPath}` , file})

    })
})


module.exports = router;
