import React, { useState, useEffect } from 'react';
import { useUser } from '../components/usercontext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Real Crypto Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching Bitcoin market chart data (last 7 days)
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily'
        );
        const result = await response.json();

        // Format data for Recharts
        const formattedData = result.prices.map((item) => ({
          date: new Date(item[0]).toLocaleDateString(undefined, { weekday: 'short' }),
          price: item[1].toFixed(0),
        }));

        setData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card dashboard-card">
      <div className="welcome-banner">
        <h2>👋 Welcome back, {user?.name || 'User'}!</h2>
        <p>Here is the Bitcoin market trend for the last 7 days.</p>
      </div>

      {loading ? (
        <div className="loading-spinner">Loading Market Data...</div>
      ) : (
        <div className="chart-container">
          <div className="stat-box">
            <span>Current Asset</span>
            <strong>Bitcoin (BTC)</strong>
          </div>
          
          <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="date" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} domain={['auto', 'auto']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#2196f3" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#2196f3' }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;