import React from 'react';
import { FileText } from 'lucide-react';

const Files = () => (
  <div className="card">
    <h3>React App</h3>
    <h2>Files</h2>
    <div>
      {[1, 2, 3].map(i => (
        <div key={i} className="list-item">
          <FileText size={20} color="#ccc"/>
          <div style={{width: '100%'}}>
            <div className="line long"></div>
            <div className="line short"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// This line fixes the error
export default Files;