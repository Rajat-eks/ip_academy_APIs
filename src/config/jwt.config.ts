import { registerAs } from "@nestjs/config";

  export const JWT_AUTH=registerAs('JWT',()=>{
    return{
        SECRET:process.env['JWT_SECRET'],
        EXPIRY:process.env['JWT_EXPIRY']
    }
   
  })