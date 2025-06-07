import React from 'react';
import '../styles/GoalSelection.css';

const GoalSelection = ({onSelect}) => {
    return (
        <div className="goal-container">
            <h1>Select you communication Goal</h1>
            <p>This will help customize your AI assistant experience</p>

            <div className='goal-buttons'>
                <button onClick={()=>onSelect('interview')}>
                    Interview Practice
                </button>
                <button onClick={()=>onSelect('presentation')}>
                    Presentation
                </button>
                <button onClick={()=>onSelect('gd')}>
                    Group Discussion
                </button>
            </div>
        </div>
    );
};

export default GoalSelection;