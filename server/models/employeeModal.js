const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    department: { type: String, require: true },
    salary: { type: String, require: true },
    userRelation: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const employeeModal = mongoose.model("employeData", employeeSchema);

module.exports = { employeeModal };
