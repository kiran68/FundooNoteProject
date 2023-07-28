
import dotenv from 'dotenv';
dotenv.config();

const nodemailer = require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = '278193214646-gv918t83j7koidjjdnik4c2l6qbocoo5.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//041FpFzQJkbGFCgYIARAAGAQSNwF-L9IrHZwmZdVZZ430GtgtCD1NXkZK_Psy1exgWIbgx_ovRr-KR-p3i2AbNxZ_bH-P5uPHY-E'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

export async function sendMail(){
try{
    const accessToken = await oAuth2Client.getAccessToken() 
    const transport = nodemailer.createTransport({
        service : 'gmail',
        auth:{
         type: 'OAuth2',
         user : 'kiranurshil88@gmail.com',
         clientId : CLIENT_ID,
         clientSecret : CLIENT_SECRET,
         refreshToken: REFRESH_TOKEN,
         accessToken : accessToken
        }
    })
    const mailOptions = {
        from : 'KiranUrshil<kiranurshil88@gmail.com>',
        to: 'kiranurshil88@gmail.com',
        subject: 'Hello Gmail NodeMailer API',
        text : 'You Can Reset Your Password',
        html : '<h1> Hello from gmail using API</h2>'
    }
        const result = await transport.sendMail(mailOptions)
        return result
}
catch (error){
    return error
}
}

