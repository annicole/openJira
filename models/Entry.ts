import mongoose,{Model,mongo,Schema} from "mongoose";
import { Entry } from "../interfaces";

export interface IEntry extends Entry{
    
}

const entrySchema = new Schema({
    description:{type:String,required:true},
    createdAt:{type:Number},
    status:{
        type:String,
        enum:{
            values:['pending','in-progres','finished'],
            message: '{VALUE}  no es un estado permitido'
        }
    }
});

const EntryModel :Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry',entrySchema);

export default EntryModel;