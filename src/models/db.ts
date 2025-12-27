import mongoose from "mongoose";


export default function Conndb(){
    mongoose.connect(String(process.env.MONGO_URI))
        .then(() => {
            console.log('db connected')
        })
        .catch((e) => {
            console.log(e)
        })
}