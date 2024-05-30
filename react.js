import React, { useState, useEffect } from 'react';

const TopBrands = () => {
  const [topBrands, setTopBrands] = useState([]);
  const [numberOfBrands, setNumberOfBrands] = useState(5); // Default to top 5 brands

  useEffect(() => {
    // Fetch top brands when the component mounts
    fetchTopBrands();
  }, []);

  const fetchTopBrands = async () => {
    try {
      // Replace this with your API endpoint to fetch top brands
      const response = await fetch(`/api/topBrands?limit=${numberOfBrands}`);
      const data = await response.json();
      setTopBrands(data);
    } catch (error) {
      console.error('Error fetching top brands:', error);
    }
  };

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumberOfBrands(value);
    }
  };

  return (
    <div>
      <h1>Top Brands</h1>
      <label htmlFor="numberOfBrands">Number of Brands:</label>
      <input
        type="number"
        id="numberOfBrands"
        value={numberOfBrands}
        onChange={handleNumberChange}
      />
      <ul>
        {topBrands.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopBrands;
