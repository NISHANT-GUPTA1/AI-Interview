import React, {useState, useEffect} from 'react';
import {speakText} from '../utils/speechUtils';
import axios from 'axios';

const InterviewPage = () => {
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchQuestion = async () => {
        setLoading(true);
        try{
            const res = await axios.get('http://localhost:5000/api/generate-question');
            setQuestion(res.data.question);
            speakText(res.data.question);
        } catch(err) {
            console.error('Failed to fatch question:', err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchQuestion();
    }, []);

    return (
        <div>
           <h2> AI Interview in Progress</h2>
           {loading ?<p>Loading Qurestion...</p> : <p><strong>Question :</strong>{question}</p>}  
            <button onClick={fetchQuestion}>Next Question</button>
        </div>
    );
};

export default InterviewPage;