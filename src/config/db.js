import { connect } from 'mongoose'

const mongoURL = "mongodb+srv://sanjula:sanjula@cluster0-dugye.azure.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await connect(mongoURL , {
             useNewUrlParser: true,
             useUnifiedTopology: true 
            });
        console.log("Data base connected");
        
    } catch (error) {
        console.log(error.messaage);
    }
}

export default connectDB;