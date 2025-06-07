import React from "react";
import '../styles/InterviewType.css';

const InterviewType = ({onSelect}) => {
    const interviewOptions = [
        'Java Developer Intern',
        'Python Developer',
        'Machine Learning Engineer',
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer',
        'others'
    ];

    return (
        <div className="interview-type-container">
            <h1>Select Interview Type</h1>
            <p>Choose the domain for mock interview</p>

            <div className="interview-options">
                {interviewOptions.map((role, index) => (
                    <button key = {index} onClick={() => onSelect(role)}>
                        {role}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default InterviewType;
