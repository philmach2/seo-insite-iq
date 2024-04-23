import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async'
import axios from 'axios';
import './App.css';
import InputForm from './components/InputForm';
import DisplayResults from './components/DisplayResults';
import { AuditResult } from './components/types';

export default function App() {
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);

  const handleSubmit = async (url: string) => {
    try {
      const response = await axios.get('/api/audit?url=' + url); // Example API endpoint
      setAuditResults(response.data);
    } catch (error) {
      console.error('Error fetching audit results:', error);
    }
  };


  return (
    <HelmetProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">SEO Insite IQ</h1>
        <InputForm onSubmit={handleSubmit} />
        <DisplayResults results={auditResults} />
      </div>
    </HelmetProvider>
  );
}
