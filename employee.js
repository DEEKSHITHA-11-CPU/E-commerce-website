const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    image:String
});

const EmployeeModel = mongoose.model("Userrrr", EmployeeSchema);

module.exports = EmployeeModel;



// models/employee.js

// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     avatar: {
//         type: String // Store the file name of the uploaded avatar
//     }
// });

// const EmployeeModel = mongoose.model("Employee", employeeSchema);

// module.exports = EmployeeModel;
