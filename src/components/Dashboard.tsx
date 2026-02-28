import { useEffect, useState } from 'react';
import { fetchAgents } from '../services/apiService';
import type { Agent } from '../types/agent';

export const Dashboard = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAgents()
      .then(data => {
        setAgents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading agents...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">OpenClaw Agents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map(agent => (
          <div key={agent.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{agent.name}</h2>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${agent.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                {agent.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">ID:</span> {agent.id}</p>
              {agent.model && <p><span className="font-medium">Model:</span> {agent.model}</p>}
              {agent.workspace && <p className="truncate"><span className="font-medium">Workspace:</span> {agent.workspace}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
