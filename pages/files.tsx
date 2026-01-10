
import React from 'react';
import { FileText, Image, MoreVertical, Download, Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const Files = () => {
  const files = [
    { name: 'Brand_Guidelines.pdf', type: 'document', size: '2.4 MB', date: 'Jan 12, 2025' },
    { name: 'Architecture_Plan_V2.fig', type: 'design', size: '14.8 MB', date: 'Feb 03, 2025' },
    { name: 'Marketing_Assets.zip', type: 'archive', size: '124.2 MB', date: 'Feb 18, 2025' },
    { name: 'Project_Lumina_Draft.docx', type: 'document', size: '1.1 MB', date: 'Mar 01, 2025' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-4xl font-black tracking-tight mb-2">Vault</h2>
          <p className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Secure Storage Management</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium min-w-[280px]"
            />
          </div>
          <button className="p-3 bg-blue-600 hover:bg-blue-500 rounded-2xl transition-all shadow-lg shadow-blue-600/20">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {files.map((file, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/[0.03] border border-white/5 rounded-[32px] p-6 group hover:border-white/20 hover:bg-white/[0.05] transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                {file.type === 'design' ? <Image className="text-indigo-400" /> : <FileText className="text-blue-400" />}
              </div>
              <button className="text-gray-500 hover:text-white p-1">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="space-y-1 mb-6">
              <h4 className="font-bold text-sm truncate">{file.name}</h4>
              <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest">{file.size} &bull; {file.date}</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-all border border-white/5">
              <Download size={14} /> Download
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Files;
