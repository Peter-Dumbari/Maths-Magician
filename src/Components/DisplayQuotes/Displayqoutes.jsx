import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Displayqoutes.css';

function Displayqoutes() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    setLoading(true);
    axios
      .get('https://api.api-ninjas.com/v1/quotes?category=funny', {
        headers: {
          'X-Api-Key': apiKey,
        },
      })

      .then((res) => {
        setQuotes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [quotes]);

  return (
    <div className="qoute-container">
      <p>{error && error}</p>
      {loading ? (
        <p className="qoute">loading...</p>
      ) : (
        quotes
        && quotes.map((quote) => (
          <p className="qoute" key={quote.index}>
            {quote.quote}
          </p>
        ))
      )}
    </div>
  );
}

export default Displayqoutes;
