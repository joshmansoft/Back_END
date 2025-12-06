import mongoose from "mongoose";
//creation of database form
const cohortSchema = new mongoose.Schema (
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
       phoneNumber: {type: String, required: false, unique: true},
        password: {type: String, required: true},
        country: {type: String, required: false},
        state: {type: String, required: false },
        
    }, 
    {timestamps: true}
)

const cohort = mongoose.model("cohort", cohortSchema )
export default cohort