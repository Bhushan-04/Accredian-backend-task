const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const referralRoutes = require('./Route/route');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

dotenv.config();

const prisma = new PrismaClient();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/', referralRoutes);



if(prisma.referral){
  console.log("Db Connected !")
}


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
