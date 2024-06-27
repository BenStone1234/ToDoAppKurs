import {object, string, number, coerce} from "zod";
import dotenv from 'dotenv';

dotenv.config();


const envSchema = object({

    /*PORT: string({
        message: "PORT must be a number!"
    }).transform( e => {
        try{
            const port = parseInt(e);


            if(port < 1 || port > 65535){
                throw "PORT not in valid range";
            }

            return port;
        }
        catch(e){
            console.error(e);
        }
    })*/


    PORT: coerce.number({
        message: "Port must be a number"
    }).min(0).max(65636)
    
});

// validate environment variables

export default envSchema.parse(process.env);