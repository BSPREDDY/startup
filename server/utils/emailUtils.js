const nodemailer = require('nodemailer');

const getTransporter = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Email credentials (EMAIL_USER, EMAIL_PASS) are not configured');
    }
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};

/**
 * Sends an email
 * @param {string} to - The recipient's email address
 * @param {string} subject - The subject of the email
 * @param {string} text - The plain text content of the email
 * @param {string} html - The HTML content of the email (optional)
 * @returns {Promise} - Resolves when the email is sent
 */
const sendEmail = async (to, subject, text, html = '') => {
    try {
        const transporter = getTransporter();
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html: html || text, // Fallback to text if HTML is not provided
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`[v0] Email sent to ${to}: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error('[v0] Error sending email:', error);
        throw error;
    }
};

module.exports = {
    sendEmail,
};
