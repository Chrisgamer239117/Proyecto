



//let db=require('../../bd/db');
let mysql = require('../../bd/mysql');
let comics=require('../models/comics');
module.exports = {
    create:(req,res)=>{
       console.log(req.body);
       //db.agregarComics(new comics('a','r'));
       mysql.agregar
       res.json({mensaje:'Se agrego un comic'});
    },
    list:(req,res)=>{
       //res.json(db.listarComics());
       mysql.query('select * from comics',(err,rows,fields)=>{
         if (!err)
            res.json(rows);
         else
            res.json(err);
      })
    }
}
