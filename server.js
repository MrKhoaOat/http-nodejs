import { getDatabase ,set,ref,get} from "firebase/database";
import { initializeApp } from "firebase/app";
import  express  from "express";
import  bodyParser  from "body-parser";



var app2 = express()
app2.use(bodyParser.json())
app2.use(bodyParser.urlencoded({extended : true}))


const firebaseConfig = {
    apiKey: "AIzaSyB2BQZvTvhgiH1jKQlZa4SqB4iZBTVGce8",
    authDomain: "iotprojectend.firebaseapp.com",
    databaseURL: "https://iotprojectend-default-rtdb.firebaseio.com",
    projectId: "iotprojectend",
    storageBucket: "iotprojectend.appspot.com",
    messagingSenderId: "920260854782",
    appId: "1:920260854782:web:4b813ee81d554116f336af",
    measurementId: "G-X2MBPY0PD5"
  };

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)


var array = []


app2.get('/api/get',(req,res) => {
    try {
        get(ref(db,"DHT"))
        .then((data) => {
            res.status(200).send(data.val())
            array.push(data.val())
            console.log(array)
        })
        
    }catch(err){
        console.log(err)
        return res.status(500).json({
            RespCode:500,
            RespMessage:err.message
        })
    }
 
}) 

app2.listen(3000,console.log("Server is running on port 3000"))