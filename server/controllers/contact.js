const nodemailer = require("nodemailer");
const emailSchema = require("../model/emailSchema");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.subject ||
    !req.body.message
  ) {
    res.status(400).send("Don't leave any Field Empty.");
  } else if (!emailRegex.test(req.body.email)) {
    res.status(400).send("Invalid email address.");
  } else {
    const { name, email, subject, message } = req.body;

    try {
      // If all checks pass, save the email data to the database
      const newEmail = new emailSchema({ name, email, subject, message });
      await newEmail.save();
    } catch (error) {
      res.status(501).send("Unable to save in db");
    }

    // Set up nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail", // or use SMTP configuration
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password or app password
      },
    });

    // Set up email data
    let mailOptions = {
      from: email,
      to: "himanshukt909@gmail.com", // Your receiving email address
      subject: subject,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      console.log("Success");
      console.log(info);
      res.status(200).json({ message: "Email sent successfully" });
    });
  }
};
