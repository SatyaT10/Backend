const express=require("express");
const employeeRoute= express();

// const employeeRoute = express();
employeeRoute.use(express.json());
employeeRoute.use(express.urlencoded({extended:true}));


employeeRoute.set('view engine', 'ejs');
employeeRoute.set('views', './views');


const employeeController=require("../controllers/employeeController");
employeeRoute.get('/register',function(req,res){
    try {
        res.render("register")
    } catch (error) {
        console.log(error.message);
    }
})

employeeRoute.post('/register',employeeController.insertEmployee);


module.exports={
    employeeRoute
};