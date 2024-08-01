import NoteGroup from "../models/noteGroup.models.js";
import Notes from "../models/notes.models.js";

export const createGroup = async(req,res)=>{
     try {
        const {groupName,groupColor} = req.body;
        const existedGroup = await NoteGroup.findOne({groupName});
        if(existedGroup)
            throw new Error("Group Already Exists");
        const groupRef = await NoteGroup.create({groupName,groupColor});
        return res.status(200).json({message:"Group Created SuccessFully",data:groupRef});
    } catch (error) {
        console.log("Error Happens in Group Creating",error.message);
    }
}

export const storeNote = async(req,res)=>{
    try {
        const groupId = req.params.groupId;
        const {content} = req.body;
        const isGroup = await NoteGroup.findOne({_id:groupId});
        if(!isGroup)
            throw new Error("No Group There");
        const data_to_send = {groupId,content}
        const noteRef = await Notes.create(data_to_send);
        isGroup.groupMessages.push(noteRef._id);
        await isGroup.save();
        return res.status(200).json({message:"Notes Created SuccessFully",data:noteRef});
    } catch (error) {
        console.log("Error Happens in Note Storing",error.message);
    }
}

export const getGroup = async(req,res)=>{
     try {
        const groupId = req.params.groupId;
        const isGroup = await NoteGroup.findOne({_id:groupId}).populate("groupMessages");
        if(!isGroup)
            throw new Error("No Group There");
        return res.status(200).json({message:"Group Data Fetched SuccessFully",data:isGroup});
    } catch (error) {
        console.log("Error Happens in Group Fetching",error.message);
    }
}

export const getAllGroup = async(req,res)=>{
     try {
        const allGroup = await NoteGroup.find({}).select("groupName groupColor");
        if(!allGroup)
            throw new Error("No Group There");
        return res.status(200).json({message:"Group Data Fetched SuccessFully",data:allGroup});
    } catch (error) {
        console.log("Error Happens in Group Fetching",error.message);
    }
}