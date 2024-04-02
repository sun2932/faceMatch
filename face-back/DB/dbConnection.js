const mongoose=require('mongoose')

const dbConnect=()=>{
    try{
        mongoose.connect("mongodb+srv://sunnypatel251212345:Z8mokzwTyOQosr29@facecluster.3hyzrzb.mongodb.net/");
        console.log('database is connected');
    }catch(e){
        console.long(e);
    }
}

module.exports=dbConnect;