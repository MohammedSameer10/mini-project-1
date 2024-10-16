const mongoose = require('mongoose');
const user = require('./model/logins');
    const roomDetails =[
      {
        "userName": "Moneshvel S T",
        "password": "password123"
      }
      
    ]
    
    

const insertData = async () => {
  try {

    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected!');


    const result = await user.insertMany(roomDetails);
    console.log('Sample data inserted:', result);
    

    await mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting data:', error);
    mongoose.connection.close();
  }
};

insertData();
