const nodeMailer=require("nodemailer");
require("dotenv").config();


const transporter = nodeMailer.createTransport({
    service:"gmail",
    host: "smtp.forwardemail.net",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_GMAIL,  //your gmail
      pass: process.env.USER_PASSOWRD, //your app password
    },
  });

  
  const mailOptions={
    from:{
        name:"Siri",
        address:process.env.USER_GMAIL
    },
    to:[process.env.RECEIVER_GMAIL],
    subject:"Good Night",
    text:"Saurab swoopna suman ko geet sunako"
  }


  const sendMail=async(transporter,mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
  }

  sendMail(transporter,mailOptions);
 
 

//   module.exports={
//     transporter,mailOptions,sendMail
//   }