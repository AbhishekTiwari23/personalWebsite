// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SendGrip_Api_Key);

// async function sendEmail(req, res) {
//   try {
//     // console.log("REQ.BODY", req.body);
//     await sendgrid.send({
//       to: "tiwari.abhishektiwari23@gmail.com", // Your email where you'll receive emails
//       from: "tiwari.abhishektiwari23@gmail.com", // your website email address here
//       subject: `${req.body.subject}`,
//       html: `<div>You've got a mail</div>`,
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "www" });
// }

// export default sendEmail;

// // // // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'
export default async function (req, res) {

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.email_test,
      },
      secure: true,
    });
    try{
      await transporter.sendMail({
        from: 'tiwari.abhishektiwari23@gmail.com',
      to: 'tiwari.abhishektiwari23@gmail.com',
      subject: `Message From ${req.body.first + req.body.last}`,
      text:  " Email: " + req.body.email,
      html: `
      <p>Name : ${req.body.first + " " + req.body.last}</p>
      <p>Subject : ${req.body.mailsubject}</p>
      <p>Message : ${req.body.content}</p>
      <p>Email : ${req.body.email}</p>`
      });}catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
      }
      try{
        await transporter.sendMail({
          from: 'tiwari.abhishektiwari23@gmail.com',
        to: req.body.email,
        subject: `Message From Abhishek Tiwari`,
        text:  " Email: " + req.body.email,
        html: `<p>Hi ${req.body.first + req.body.last}, </p>
        <p>Abhishek has received your mail and will respond to you soon, mean while you can conect him over his socils </p>`
        });}catch (error) {
          return res.status(500).json({ error: error.message || error.toString() });
        }
      return res.status(200).json({ error: "lll" });
  };

  
  
  
  
  


// export default function (req, res) {
//     console.log("milf"+req.body)

//   }


// import sgMail from '@sendgrid/mail'


// sgMail.setApiKey(process.env.SendGrip_Api_Key)


// const handler = async(req,res ) =>{

//     const msg ={
//       from: 'tiwari.abhishektiwari23@gmail.com',
//             to: 'abhishek.tiwari.ug21@nsut.ac.in',
//             subject: `Message From ${req.body.first}`,
//             text: req.body.message + " | Sent from: " + req.body.email,
//             html: `<div>${req.body.message}</div><p>Sent from:
//             ${req.body.email}</p>`

//     }

//     sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })
//   }