import React from 'react';
import { AuditResult } from './types';

const DisplayResults: React.FC<{ results: AuditResult[] }> = ({ results }) => {
  return (
    <div>
      <h2>SEO Audit Results:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p>Title: {result.pageTitle}</p>
            <p>Description: {result.metaDescription}</p>
            {/* Add more display for other audit results */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayResults;
