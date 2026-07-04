const Contact = require("../models/Contact");
const { sendEmail } = require("../utils/emailUtils");

const getAllContacts = async (req, res) => {
    try {
        const { status, isSpam, page = 1, limit = 10, search } = req.query;

        let query = {};

        if (status) query.status = status;
        if (isSpam !== undefined) {
            if (isSpam === "true") {
                query.isSpam = true;
            } else {
                query.isSpam = { $ne: true };
            }
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { message: { $regex: search, $options: "i" } },
            ];
        }

        const total = await Contact.countDocuments(query);
        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        res.status(200).json({
            success: true,
            contacts,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const getContactById = async (req, res) => {
    try {
        const { id } = req.params;

        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            contact,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const updateContactStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!["new", "read", "replied"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status",
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            id,
            { status },
            { returnDocument: 'after' }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            contact,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const markAsSpam = async (req, res) => {
    try {
        const { id } = req.params;
        const { isSpam } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            id,
            { isSpam },
            { returnDocument: 'after' }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            contact,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const contact = await Contact.findByIdAndDelete(id);

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const getStats = async (req, res) => {
    try {
        const total = await Contact.countDocuments({ isSpam: { $ne: true } });
        const newCount = await Contact.countDocuments({ status: "new", isSpam: { $ne: true } });
        const readCount = await Contact.countDocuments({ status: "read", isSpam: { $ne: true } });
        const repliedCount = await Contact.countDocuments({ status: "replied", isSpam: { $ne: true } });
        const spamCount = await Contact.countDocuments({ isSpam: true });

        res.status(200).json({
            success: true,
            stats: {
                total,
                new: newCount,
                read: readCount,
                replied: repliedCount,
                spam: spamCount,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

const replyToContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { replyMessage } = req.body;

        if (!replyMessage) {
            return res.status(400).json({ success: false, message: "Reply message is required" });
        }

        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }

        const subject = `Re: Your inquiry to Bhavana Technology`;
        const text = `Hi ${contact.name},\n\nThank you for reaching out to us.\n\n${replyMessage}\n\nBest regards,\nBhavana Technology Team`;
        const html = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <p>Hi ${contact.name},</p>
                <p>Thank you for reaching out to us. We have received your message and here is our response:</p>
                <blockquote style="border-left: 4px solid #3b82f6; padding-left: 15px; margin: 20px 0; font-style: italic; color: #555;">
                    ${replyMessage.replace(/\n/g, '<br>')}
                </blockquote>
                <p>Best regards,<br><strong>Bhavana Technology Team</strong></p>
            </div>
        `;
        
        await sendEmail(contact.email, subject, text, html);

        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            { status: 'replied' },
            { returnDocument: 'after' }
        );

        res.status(200).json({
            success: true,
            message: "Reply sent successfully",
            contact: updatedContact,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to send reply",
        });
    }
};

module.exports = {
    getAllContacts,
    getContactById,
    updateContactStatus,
    markAsSpam,
    deleteContact,
    getStats,
    replyToContact,
};
