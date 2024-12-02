const express = require('express');
const { getAssignments, acceptAssignment, rejectAssignment } = require('../controllers/adminController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/assignments', authMiddleware, getAssignments);
router.post('/assignments/:id/accept', authMiddleware, acceptAssignment);
router.post('/assignments/:id/reject', authMiddleware, rejectAssignment);

module.exports = router;
