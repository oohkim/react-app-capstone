import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2 style={{ color: '#73C1C6' }}>Newsletter - Stay tuned and get the latest updates</h2>
      <p>Far, far away, behind the word mountains</p>
      <form>
        <input type="email" placeholder="Enter email address" className="custom-input" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
