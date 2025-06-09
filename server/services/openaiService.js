const {OpenAI}  = require('openai');
require('dotenv').config();

const openai = new OpenAI({apiKey: process.env.OpenAI_API_KEY});

async function generateQuestion(role, language, resumeText, history = []) {
    const messages = [
        {
            role : "system", 
            content : `You are an expert interviewer. Ask Ask one question at a time to a candidate for the position: ${role}. Speak only in ${language}. Use the resume below to craft relevant questions.
            Resume : ${resumeText}`
        }, ...history, {
            role: "user", 
            content:"Ask the next question."
        }      
    ];

    const response = await openai.chat.completions.create({
        model : 'gpt-4o', 
        messages,
        temperature:0.7,
    });

    return response.choices[0].message.content;
}

module.exports = {generateQuestion};