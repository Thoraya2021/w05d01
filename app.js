const express=require ("express");
const app=express ()
const port=3000 ;
app.use(express.json()) ;


const tasks=[{id:1, taskname:"sleep",iscompelet: false},
{id:2, taskname:"work",iscompelet: false},
{id:3, taskname:"code",iscompelet: false}];


//get

app.get("/tasks",(req,res)=>{
  res.status(200);
  res.json(tasks) ;
  }) ;
  
  


 /*
  app.get("/task/:id",(req,res)=> {
    const found = tasks.find((found) => found.id === parseInt(req.params.id));
  

    if(found)
    {

        res.json(tasks.filter(task=>task.id===parseInt(req.params.id)));
    }
    else
    {

        res.status(400).json({msg:`tasks not finish`});
   }
  });*/



  

  app.get(" /task ",(req,res)=>{
    const {id}=req.query
    const finish =tasks.filter((item)=>{
      return item.iscompelet===false;
      });
    
      if (tasks[i].iscompelet === true) {
      tasks[i].iscompelet = false;
     } else {
        tasks[i].iscompelet= true;
    }
     tasks[i].iscompelet = !tasks[i].iscompelet;
    if (finish){
    res.status(200)
    res.json(finish) ;
    }
    else
    {
    res.status(404)
    res.json("tasks not finish");
    
    }
});
    


//post

app.post("/create", (req,res) => {
  const {id,taskname,iscompelet} =req.body;
  const taskcom={
    id:req.body.id,
    taskname:req.body.taskname,
    iscompelet:req.body.iscompelet
  };
  tasks.push({id,taskname,iscompelet});
   res.status(201)
  res.json(id,taskname,iscompelet) ;

});
  app.put ("/put", (req,res) => {
const {iscompelet}=req.query
    const modify =tasks.map((item)=>{
      id:item.id;
      taskname:item.taskname;
      iscompelet:item.iscompelet
     res.json(modify)
      })
  
    });
//delete
app.delete ("/delete", (req,res) => {
const delet=tasks.filter((i) => {
tasks.splice (delet,  1);
res.json(tasks);
})
});

app.listen (port,() => {
    console.log(`server is running ${port}`)
})