const Assignment = require('../models/assignmentModel');

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user.username });
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assignments' });
  }
};

exports.acceptAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await Assignment.findByIdAndUpdate(id, { status: 'accepted' });
    res.status(200).json({ message: 'Assignment accepted' });
  } catch (error) {
    res.status(500).json({ error: 'Error accepting assignment' });
  }
};

exports.rejectAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await Assignment.findByIdAndUpdate(id, { status: 'rejected' });
    res.status(200).json({ message: 'Assignment rejected' });
  } catch (error) {
    res.status(500).json({ error: 'Error rejecting assignment' });
  }
};
