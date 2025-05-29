const express = require('express');
const router=express.Router();

const newscontroller=require('../app/controllers/newcontroller');
// dinh tuyen cho cac tuyen duong vao path news
router.get('/:slug', newscontroller.show);
router.get('/', newscontroller.index);
module.exports=router;