const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');
const UserRepository = require('./repository/user-repository');
const app = express();

const prepareAndStartServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({extended:true}));

  app.use('/api',apiRoutes);


  app.listen(PORT, async ()=>{
    console.log(`Server started on port ${PORT}`);
    const repo = new UserRepository();
    const response = await repo.getById(1);
    console.log(response);


    // const incomingpassword = 'Divya48583';
    // const user = await User.findByPk(2);
    // const response = bcrypt.compareSync(incomingpassword,user.Password);
    // console.log(response);
  })
}

prepareAndStartServer();