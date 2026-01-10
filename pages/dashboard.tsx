
import React, { useState, useEffect } from 'react';
import { useUser } from '../components/UserContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Users, CreditCard, ArrowUpRight, Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user } = useUser();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily'
        );
        const result = await response.json();
        const formattedData = result.prices.map((item: any) => ({
          date: new Date(item[0]).toLocaleDateString(undefined, { weekday: 'short' }),
          price: Math.floor(item[1]),
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

  const stats = [
    { label: 'Active Sessions', value: '42', icon: Activity, trend: '+12%', color: 'blue' },
    { label: 'Team Members', value: '1,284', icon: Users, trend: '+4%', color: 'indigo' },
    { label: 'Revenue (MTD)', value: '$12.4k', icon: CreditCard, trend: '+18%', color: 'emerald' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight mb-2">Workspace</h2>
          <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Overview & Analytics</p>
        </div>
        <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl flex items-center gap-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-gray-300">Live Market Feed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] hover:border-white/20 transition-all group cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-black text-green-500 bg-green-500/10 px-3 py-1 rounded-full">{stat.trend}</span>
            </div>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white/[0.03] border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-blue-500" size={20} />
              <h3 className="text-2xl font-black text-white tracking-tight">Market Momentum</h3>
            </div>
            <p className="text-gray-500 text-sm font-semibold">Bitcoin (BTC/USD) 7-Day Performance Analysis</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors">
            Detailed Report <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="h-[400px] w-full mt-6">
          {loading ? (
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">Hydrating data points...</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#555" 
                  fontSize={10} 
                  fontWeight={800}
                  axisLine={false} 
                  tickLine={false} 
                  dy={15}
                />
                <YAxis 
                  stroke="#555" 
                  fontSize={10} 
                  fontWeight={800}
                  axisLine={false} 
                  tickLine={false} 
                  domain={['auto', 'auto']}
                  tickFormatter={(val) => `$${(val/1000).toFixed(1)}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10, 10, 10, 0.8)', 
                    borderRadius: '24px', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    backdropBlur: '12px',
                    padding: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                  }}
                  itemStyle={{ color: '#fff', fontWeight: 800, fontSize: '14px' }}
                  labelStyle={{ color: '#666', fontWeight: 700, marginBottom: '8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#3b82f6" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
