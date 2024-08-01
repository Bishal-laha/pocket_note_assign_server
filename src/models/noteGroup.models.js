import mongoose,{Types} from "mongoose";

const noteGroupSchema = new mongoose.Schema({
    groupName:{
        type:String,
        required:true
    },
    groupColor:{
        type:String,
        required:true
    },
    groupMessages:[
        {
            type:Types.ObjectId,
            ref:"Notes"
        }
    ]
},{timestamps:true});

const NoteGroup = mongoose.models.NoteGroup || mongoose.model("NoteGroup",noteGroupSchema);

export default NoteGroup;