import {Schema, Document, model} from "mongoose";


interface WaiterModel extends Document {
    fullname: string;
    email: string
}

const WaiterSchema = new Schema<WaiterModel>({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

const Waiter = model<WaiterModel>("Waiter", WaiterSchema)

export default Waiter;