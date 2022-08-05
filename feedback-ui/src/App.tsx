import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  // console.log(feedbackData)
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackList feedback={feedbackData} />
      </div>
    </>
  );
}

export default App;
