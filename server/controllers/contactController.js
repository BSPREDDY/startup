const Contact =
    require("../models/Contact");

const nodemailer =
    require("nodemailer");

const sendMessage = async (
    req,
    res
) => {
    try {

        const {
            name,
            email,
            message,
        } = req.body;

        if (
            !name ||
            !email ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "All fields are required",
            });
        }

        const lead =
            await Contact.create({
                name,
                email,
                message,
            });

        const transporter =
            nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user:
                        process.env.EMAIL_USER,
                    pass:
                        process.env.EMAIL_PASS,
                },
            });

        await transporter.sendMail({
            from:
                process.env.EMAIL_USER,

            to:
                "surya@bhavanatss.com",

            subject:
                "New Website Inquiry",

            html: `
        <h2>New Lead Received</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b> ${message}</p>
      `,
        });

        await transporter.sendMail({
            from:
                process.env.EMAIL_USER,

            to: email,

            subject:
                "Thank You For Contacting Bhavana Technology's",

            html: `
      <div
      style="
      font-family:Arial;
      padding:20px;
      "
      >
        <h2>
          Thank You
        </h2>

        <p>
          We have received your message.
        </p>

        <p>
          Our team will contact you shortly.
        </p>

        <br>

        <b>
          Bhavana Technology's
        </b>

      </div>
      `,
        });

        res.status(201).json({
            success: true,
            message:
                "Message Sent Successfully",
            lead,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message:
                "Server Error",
        });
    }
};

module.exports = {
    sendMessage,
};