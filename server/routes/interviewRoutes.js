const express = require('express');
const router = express.Router();
const {generateQuestion} = require('../services/openaiService');

router.post('/generate-question', async (req, res) => {
    try {
        const {role, language, resumeText, conversionHistory} = req.body;

        const result = await generateQuestion(role, language, resumeText, conversionHistory);
        res.json({ question: result});
    } catch(error) {
        console.error('Error generating question : ', error);
        res.status(500).json({error: 'Failed to generate question'});
    }
});
module.exports = router;