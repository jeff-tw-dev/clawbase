import type { Agent, Session } from '../types/agent';

// Assuming the API is exposed via a backend on /api
export const fetchAgents = async (): Promise<Agent[]> => {
  const response = await fetch('/api/agents');
  if (!response.ok) throw new Error('Failed to fetch agents');
  return response.json();
};

export const fetchSessions = async (): Promise<Session[]> => {
  const response = await fetch('/api/sessions');
  if (!response.ok) throw new Error('Failed to fetch sessions');
  return response.json();
};
