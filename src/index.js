const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
//const UserService = require('./services/user-service');
const app = express();

const prepareAndStartServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

  app.use('/api',apiRoutes);


  app.listen(PORT, async ()=>{
    console.log(`Server started on port ${PORT}`);
  // const service = new UserService();
  //  const newToken = service.createToken({email:'rohit.sh7705@gmail.com',id:1});
  //  console.log("new token is",newToken);
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0LnNoNzcwNUBnbWFpbC5jb20iLCJpZCI6MSwiaWF0IjoxNzgyODA0NDAzLCJleHAiOjE3ODI4MDgwMDN9.RMOlOOVH-cJjWbRWJUoPe1E7uX5VD_NNvNfyOU15QGo';
 // const response = service.verifyToken(token);
  //console.log(response);
  })
}

prepareAndStartServer();