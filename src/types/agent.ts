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
