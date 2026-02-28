import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

export interface Agent {
  id: string;
  name: string;
  workspace?: string;
  agentDir?: string;
  model?: string;
  status: 'active' | 'inactive';
}

export interface Session {
  id: string;
  agentId: string;
  status: string;
  startTime: string;
}

export async function getOpenClawConfig() {
  const configPath = path.join(os.homedir(), '.openclaw', 'openclaw.json');
  try {
    const data = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading openclaw.json:', error);
    throw error;
  }
}

export async function discoverAgents(): Promise<Agent[]> {
  const config = await getOpenClawConfig();
  const agentsList = config?.agents?.list || [];
  
  // Map to add status
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return agentsList.map((agent: any) => ({
    ...agent,
    // Mock status for now, since we only read from config
    status: 'inactive' 
  }));
}

export async function getActiveSessions(): Promise<Session[]> {
  // Mock sessions since openclaw.json doesn't contain active sessions
  // In Phase 3/4 this will likely query a live OpenClaw Gateway or read state files
  return [
    { id: 'sess-1', agentId: 'main', status: 'running', startTime: new Date().toISOString() }
  ];
}
