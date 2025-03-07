let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const userrt = require("./routes/userroute")
let bodyparser=require("body-parser")

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce_V").then(()=>{
    console.log("connection ok")
})

//
// let corsOptions = {
//     origin: 'https://singular-muffin-dde045.netlify.app'
//   }; 
let corsOptions = {
  origin: '*',  // Allow all origins temporarily for testing
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
};

let app=express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors(corsOptions));
app.use(express.static('./prodimages'))
app.use("/",userrt)

app.listen(5001)