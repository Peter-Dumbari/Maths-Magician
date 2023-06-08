import React, { useEffect, useState } from 'react';
import './Displayqoutes.css';
import axios from 'axios';

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
        console.log(quotes);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

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
