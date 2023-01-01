// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'
export default function handler(req, res) {
  // alert(req.body)
  transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.password,
    },
    secure: true,
  });
  try{
     transporter.sendMail({
      from: 'tiwari.abktiwari23@gmail.com',
    to: 'tiwari.abktiwari23@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
    });}
    catch (error) {
      return res.status(5000).json({ error: error.message || error.toString() });
    }
  res.status(200).json({ name: 'John Doe' })
}
