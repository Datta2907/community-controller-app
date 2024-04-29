const Community = require('../models/community');

exports.getAllCommunities = async (req, res) => {
    try {
        const data = await Community.find({}).lean();
        return res.status(200).json({ success: true, message: 'Fetched data successfully', data });
    } catch (err) {
        console.log('Error Occurred Login', err.message);
        return res.status(500).json({ success: false, message: 'Error Occured' });
    }
}