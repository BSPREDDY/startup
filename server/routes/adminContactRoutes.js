const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middleware/auth");

const {
    getAllContacts,
    getContactById,
    updateContactStatus,
    markAsSpam,
    deleteContact,
    getStats,
    replyToContact,
} = require("../controllers/adminContactController");

router.get("/", authMiddleware, getAllContacts);
router.get("/stats", authMiddleware, getStats);
router.get("/:id", authMiddleware, getContactById);
router.put("/:id/status", authMiddleware, updateContactStatus);
router.put("/:id/spam", authMiddleware, markAsSpam);
router.delete("/:id", authMiddleware, deleteContact);
router.post("/:id/reply", authMiddleware, replyToContact);

module.exports = router;