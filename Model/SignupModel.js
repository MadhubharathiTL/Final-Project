const mongoose =require('mongoose');

const sampleTableSchema =new mongoose.Schema(
    {
        name:{ type:String,required:true },
        age:{ type:String, required:true },
        gender: { type: String, required: true },
        email: { type: String, required: true },
        contact:{ type:String, required:true},
        Address:{ type:String, required:true},
        date:{ type:Date, default:Date.now}
    }
)


const SampleTable = mongoose.model('SampleTable', sampleTableSchema);

module.exports = SampleTable;

