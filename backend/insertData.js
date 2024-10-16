const mongoose = require('mongoose');
const user = require('./model/userDetails');
    const roomDetails =[
      {
        "name": "moneshvel",
        "rollNo": "7376222AL174",
        "email": "moneshvel.al22@bitsathy.ac.in",
        "userType": "student",
        "hostel": "Emerald",
        "roomNo": 300,
        "phoneNo": "9345702823"
      },
      {
        "name": "suresh",
        "rollNo": "7376222AL175",
        "email": "suresh.warden@bitsathy.ac.in",
        "userType": "warden",
        "hostel": "Emerald",
        "roomNo": 400,  // Separate room for the warden
        "phoneNo": "9348572108"
      },
      {
        "name": "varunesh",
        "rollNo": "7376222AL176",
        "email": "varunesh.cs22@bitsathy.ac.in",
        "userType": "student",
        "hostel": "Emerald",
        "roomNo": 301,
        "phoneNo": "9632180489"
      },
      {
        "name": "saravanan",
        "rollNo": "7376222AL177",
        "email": "saravanan.cb22@bitsathy.ac.in",
        "userType": "student",
        "hostel": "Emerald",
        "roomNo": 300,
        "phoneNo": "9621048592"
      },
      {
        "name": "harish",
        "rollNo": "7376222AL178",
        "email": "harish.ai22@bitsathy.ac.in",
        "userType": "student",
        "hostel": "Emerald",
        "roomNo": 300,
        "phoneNo": "9104958327"
      },
      {
        "name": "ravi",
        "rollNo": "7376222AL179",
        "email": "ravi.caretaker@bitsathy.ac.in",
        "userType": "caretaker",
        "hostel": "Emerald",
        "roomNo": 310,
        "phoneNo": "9348572109"
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
