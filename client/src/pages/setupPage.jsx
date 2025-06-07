import React, {useEffect, useState, useRef} from 'react';
import '../styles/setupPage.css';

const SetupPage = ({ onSetupComplete}) => {
    const [language, setLanguage] = useState('English');
    const [cameraEnabled, setCameraEnabled] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if(cameraEnabled) {
            navigator.mediaDevices.getUserMedia({video : true, audio:true})
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((err) => {
                alert('Error accessing camera on microphone' + err.message);
            });
        }
    }, [cameraEnabled]);

    const handleStartInterview = () => {
        onSetupComplete({language});
    };

    return (
        <div className="setup-container">
            <h1>Set Up Interview</h1>

            <label>Select Interview Language:</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="English"> English</option>
                <option value="Hindi">Hindi</option>
                <option value="Japanese"> Japanese</option>
                <option value="Spanish">Spanish</option>
            </select>

            <div className="preview-selection">
                <button onClick={() => setCameraEnabled(true)}> Enable Webcam & Mic</button>
                {cameraEnabled && (
                    <video ref = {videoRef} autoPlay muted playsInline className="preview-video"/>
                )}
            </div>

            <button className="start-btn" onClick={handleStartInterview}>
                Start Interview
            </button>
        </div>
    );
};

export default SetupPage;