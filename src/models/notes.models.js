import mongoose,{Types} from "mongoose";

const notesSchema = new mongoose.Schema({
    groupId:{
        type:Types.ObjectId,
        ref:"NoteGroup",
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true});

const Notes = mongoose.models.Notes || mongoose.model("Notes",notesSchema);

export default Notes;