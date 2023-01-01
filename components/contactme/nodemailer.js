import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tiwari.abhishektiwari23@gmail.com",
    pass: 'Av@tiw@ri2223'
  },
});

export const mailOptions = {
  from: "tiwari.abhishektiwari23@gmail.com",
  to: "abhishek.tiwari.ug21@nsut.ac.in",
  subject : "nodemailer",
  text : 'hello'
};