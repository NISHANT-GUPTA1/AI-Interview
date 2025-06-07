import React, {useState } from 'react';
import GoalSelection from './pages/GoalSelection';
import InterviewType from './pages/InterviewType';
import SetupPage from './pages/setupPage';  

function App() {
    const [goal, setGoal] = useState(null);
    const [interviewType, setInterviewType] = useState(null);
    const[setup, setSetup] = useState(null);
    if(!goal) return <GoalSelection onSelect={setGoal} />;
    if(goal === 'interview' && !interviewType) return <InterviewType onSelect= {setInterviewType}/>;
    if(!setup) return <SetupPage onSetupComplete={setSetup}/>;

    return (
    <div className="App">
      <h2>Goal: {goal}</h2>
      <h2>Interview Type: {interviewType}</h2>
      <h2>Language :{setup.language}</h2>
      <p>Setup Complete. Interview starting soon....</p>
    </div>
  );   
}

export default App;