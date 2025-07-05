const errorhandeller =require ('./middlewares/errorHandler');


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const shoeRouter = require('./routes/shoeRoute')

const cart = require('./routes/cartRoute')



const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth' , require('./routes/auth.routes'))
app.use('/api/shoe', shoeRouter);
app.use('/api/cart',cart)


sequelize.sync({alter:true})
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
});
})
.catch((err) => {
    console.log(err);
});

app.use(errorhandeller);
