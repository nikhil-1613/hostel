const Verify = require('../Models/check');

async function updateStatus(req, res) {
    try {
        const { adminId, userName } = req.body;

        if (!adminId || !userName) {
            return res.status(400).json({ error: 'Both adminId and userName are required.' });
        }

        // Check if a record with the provided adminId and userName already exists
        const existingRecord = await Verify.findOne({ adminId, userName });

        if (existingRecord) {
            return res.status(409).json({ error: 'Record already exists. Use a different adminId and userName.' });
        }

        // Create a new record with the provided adminId, userName, and default status of "booked"
        const newRecord = new Verify({
            adminId,
            userName,
            status: 'booked',
        });

        // Save the new record to the database
        await newRecord.save();

        return res.status(200).json({ message: 'Record created and status set to "booked."', data: newRecord });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}

module.exports = updateStatus;

// const Verify = require('../Models/check'); 
// async function updateStatus(req, res) {
//     try {
//         const { adminId, userName } = req.body;

//         if (!adminId || !userName) {
//             return res.status(400).json({ error: 'Both adminId and userName are required.' });
//         }

//         // Find the document with the provided adminId and userName
//         const existingRecord = await Verify.findOne({ adminId, userName });

//         if (!existingRecord) {
//             return res.status(404).json({ error: 'Record not found.' });
//         }

//         // Update the status to "booked"
//         existingRecord.status = 'booked';
//         await existingRecord.save();

//         return res.status(200).json({ message: 'Status updated successfully.', data: existingRecord });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal server error.' });
//     }
// }

// module.exports =  updateStatus ;
