import React, { useState } from 'react';
import './Voting.css'; 

const Voting = () => {
    const [votes, setVotes] = useState(0);

    const handleUpvote = () => {
        setVotes(votes + 1);
    };

    const handleDownvote = () => {
        setVotes(votes - 1);
    };

    return (
        <div className="voting-container">
            <h2>Голосування</h2>
            <div className="vote-count">{votes}</div>
            <div className="vote-buttons">
                <button className="vote-button upvote" onClick={handleUpvote}>Upvote</button>
                <button className="vote-button downvote" onClick={handleDownvote}>Downvote</button>
            </div>
        </div>
    );
};

export default Voting;
