var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var cors=require("cors");




var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mynote'
})


router.use(cors({

  origin:["http://localhost:3000"]

}))

connection.connect()





router.post("/data/insert/tags", function(req, res) {

  let sql="SELECT COUNT(*) As count FROM tags WHERE tagbook=? "

  let val=[req.body.tagbook]

  connection.query(sql,val,(err,rows,fields)=>{

      if(rows[0].count==0){


        sql ="INSERT INTO tags (content,day,month,years,date,time,tagbook) VALUES (?,?,?,?,?,?,?)";

        val=[req.body.tag_name,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time,req.body.tagbook]

        connection.query(sql,val,(err,rows,fields)=>{

          if (err ) throw err;


       

         })
 
      }else{


        sql="SELECT content FROM tags WHERE tagbook=?";

        val=[req.body.tagbook]

        connection.query(sql,val,(err,rows,fields)=>{

          if(err)throw err;

          if(rows[0].content.indexOf(req.body.tag_name)==-1){

           
            sql="UPDATE tags set content=?, day=?, month=?,years=?,date=?,time=?,tagbook=? WHERE tagbook=?"

            val=[req.body.tag_name+rows[0].content,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time,req.body.tagbook,req.body.tagbook]
    
            connection.query(sql,val,(err,rows,fields)=>{
    
              if (err ) throw err;
    
    
             
    
             })
          }

        
        })
        
     
      }

  })

  
 

});

router.post("/data/insert/tasks", function(req, res) {


  let sql ="INSERT INTO tasks (content,day,month,years,date,time,color,title) VALUES (?,?,?,?,?,?,?,?)";

  let val=[req.body.content,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time,req.body.color,req.body.taskbook]

  connection.query(sql,val,(err,rows,fields)=>{


    sql ="SELECT COUNT(*) AS count FROM taskbook  WHERE content=?";

    val=[req.body.taskbook]

    connection.query(sql,val,(err,rows,fields)=>{


       

        if(rows[0].count==0){

          sql="INSERT INTO taskbook (content,date,day,month,years,time) VALUES(?,?,?,?,?,?)"

          val=[req.body.taskbook,req.body.Date,req.body.Day,req.body.Month,req.body.Years,req.body.time]


          connection.query(sql,val,(err,rows,fields)=>{


         

            if (err) throw err;

          })
      

  
         }

    })


    

  })


  

})




router.post('/data/insert/tagbook', function(req, res, next) {




  let sql="SELECT COUNT(*) AS count FROM tagbook WHERE content=?";

  let val=[req.body.tagbook_name]

  connection.query(sql,val,(err,rows,field)=>{

    if(err)throw err;

  
    if(rows[0].count==0){

      sql ="INSERT INTO tagbook (content,day,month,years,date,time) VALUES (?,?,?,?,?,?)";

      val=[req.body.tagbook_name,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time]
    
      connection.query(sql,val,(err,rows,fields)=>{
    
        if (err ) throw err;
    
    
     
    
      })

    }

  })

 
 
  res.send(req.body)


});



router.post('/data/insert/notebook', function(req, res, next) {




  let sql="SELECT COUNT(*) AS count FROM notebook WHERE content=?";

  let val=[req.body.notebook_name]

  connection.query(sql,val,(err,rows,fields)=>{

    if (err) throw err;

      if (rows[0].count==0){


        sql ="INSERT INTO notebook (content,day,month,years,date,time) VALUES (?,?,?,?,?,?)";

        val=[req.body.notebook_name,req.body.day,req.body.month,req.body.Years,req.body.Date,req.body.time]
      
       
        connection.query(sql,val,(err,rows,fields)=>{
      
          if (err ) throw err;
      
      
      
        })
      
      
      }
  })


 
  res.send(req.body)
 

});


router.delete("/data/delete/tasks/:id",function(req,res,next){
  

  let sql="DELETE   FROM    tasks WHERE id=?"

  let val=[req.params.id]

  connection.query(sql,val,(err,rows,fields)=>{

    if (err)throw err;

  })


})

router.post('/data/insert/notes', function(req, res, next) {

  console.log(req.body)

  let sql ="INSERT INTO notes (content,day,month,years,date,time,notebook,tag) VALUES (?,?,?,?,?,?,?,?)";


  let val=[req.body.note_name,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time,req.body.notebook,req.body.tag]

  
  connection.query(sql,val,(err,rows,fields)=>{


    if (err) throw err;


    sql="SELECT COUNT(*) AS COUNT FROM notebook WHERE content=?";

    val =[req.body.notebook]

    connection.query(sql,val,(err,rows,fields)=>{

      
      if(rows.count==0){
        

         
        sql ="INSERT INTO notebook (content,day,month,years,date,time) VALUES (?,?,?,?,?,?)";

        val=[req.body.notebook,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time]
              
  
        connection.query(sql,val,(err,rows,fields)=>{


          if (err)  throw err;

                
              
                
          })

            
        }

        if(req.body.tag!="" && req.body.tagbook!=""){

          sql="INSERT INTO notes_tags (id_tags,id_notes) VALUES  (?,?)";

          val=[req.body.tag,req.body.notebook]
  
          connection.query(sql,val,(err,rows,fields)=>{
  
  
          if (err) throw err;
  
                    
          })

        }


    

        })
    })

     

  


  res.send(req.body)

});



router.get("/data/fetch/notebook",(req,res,next)=>{

  const sql="SELECT * FROM notebook";

  connection.query(sql,(err,rows,fields)=>{



    res.send({"array":rows})
  })

})

router.get("/data/fetch/notes",(req,res,next)=>{

  const sql="SELECT * FROM notes";

  connection.query(sql,(err,rows,fields)=>{



    res.send({"array":rows})
  })
})

router.get("/data/fetch/tasks",(req,res,next)=>{
  
  const sql="SELECT * FROM  tasks";

  connection.query(sql,(err,rows,fields)=>{

    if  (err) throw err;

    res.send({"array":rows})
  })
  
})

router.put("/data/update/notes/:id",(req,res,next)=>{
  
  const sql="UPDATE notes SET content=? ,date=?, month=? ,years=? ,time=? , day=? ,notebook=? , tag=? WHERE id=?";

  const val=[req.body.notebook,req.body.Date,req.body.Month,req.body.Years,req.body.time,req.body.Day,req.body.notebook,req.body.tag,req.params.id]

  connection.query(sql,val,(err,rows,fields)=>{

    if  (err) throw err;

    res.send()
  })
  
})


router.put("/data/update/tasks/:id",(req,res,next)=>{

  
  const sql="UPDATE tasks SET content=? ,date=?, month=? ,years=? ,time=? , day=? ,title=? , color=? WHERE id=?";

  console.log("---------------",req.params.id)

  const val=[req.body.content,req.body.Date,req.body.Month,req.body.Years,req.body.time,req.body.Day,req.body.taskbook,req.body.color,req.params.id]

  connection.query(sql,val,(err,rows,fields)=>{

    if  (err) throw err;

    res.send()
  })
  
})


router.get("/data/fetch/tagbook",(req,res,next)=>{
  
  const sql="SELECT * FROM  tagbook";

  connection.query(sql,(err,rows,fields)=>{

    if  (err) throw err;

  

    res.send({"array":rows})
  })
  
})
router.get("/data/fetch/taskbook",(req,res,next)=>{
  
  const sql="SELECT * FROM  taskbook";

  connection.query(sql,(err,rows,fields)=>{

    if  (err) throw err;

  

    res.send({"array":rows})
  })
  
})

router.get("/data/fetch/tags",(req,res,next)=>{

  const sql="SELECT  * FROM tags";

  connection.query(sql,(err,rows,fields)=>{

    if (err) throw err;

    res.send({"array":rows})
  })
})

router.post('/data/insert/taskbook', function(req, res, next) {



  let sql="SELECT COUNT(*) AS count FROM taskbook WHERE content=?";

  let val=[req.body.taskbook_name]

  connection.query(sql,val,(err,rows,field)=>{

    if(rows[0].count==0){

      sql ="INSERT INTO taskbook (content,day,month,years,date,time) VALUES (?,?,?,?,?,?)";

      val=[req.body.taskbook_name,req.body.Day,req.body.Month,req.body.Years,req.body.Date,req.body.time]
      
      connection.query(sql,val,(err,rows,fields)=>{

        if (err ) throw err;


      })
  

    }
  })

  
  res.send(req.body)

  
});


module.exports = router;
