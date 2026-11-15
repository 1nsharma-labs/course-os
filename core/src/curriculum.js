/**
 * Course-OS Curriculum Engine & Knowledge Tracks
 */

export const DEFAULT_TRACKS = [
  {
    id: 'ai-engineering',
    title: 'Autonomous AI Engineering & Multi-Agent Swarms',
    level: 'Advanced',
    durationHours: 12,
    badge: 'Flagship Track',
    description: 'Master autonomous task DAGs, event blackboards, and sub-millisecond LLM routing.',
    modules: [
      { id: 'm1', title: 'Cognitive Architecture Fundamentals', lessons: ['Planner vs Actor Nodes', 'Consensus Verification'] },
      { id: 'm2', title: 'Building Multi-Agent Swarms with HiveMesh', lessons: ['Decentralized Memory', 'Self-Healing Incidents'] },
      { id: 'm3', title: 'Production Guardrails & FinOps', lessons: ['Sub-2ms Jailbreak Defenses', 'Prompt Exact Caching'] }
    ]
  },
  {
    id: 'fullstack-systems',
    title: 'High-Performance Node.js & Systems Engineering',
    level: 'Intermediate',
    durationHours: 10,
    badge: 'Zero-Dep Track',
    description: 'Build enterprise CLI daemons, native MCP servers, and fast zero-dependency web engines.',
    modules: [
      { id: 'm1', title: 'Native Node.js 24 ESM without Bloat', lessons: ['Zero External Dependencies', 'Streams & Subprocesses'] },
      { id: 'm2', title: 'Model Context Protocol (MCP) Mastery', lessons: ['Stdio JSON-RPC Architecture', 'Building MCP Tools'] }
    ]
  },
  {
    id: 'fintech-crypto',
    title: 'Indian FinTech & Web3 Smart Contract Engineering',
    level: 'Advanced',
    durationHours: 14,
    badge: 'High Value',
    description: 'UPI 2.0 exponential backoff architectures, GST invoicing algorithms, and EVM contract security.',
    modules: [
      { id: 'm1', title: 'UPI 2.0 Webhook Resiliency', lessons: ['Idempotency Keys', 'Dead Letter Queues'] },
      { id: 'm2', title: 'Smart Contract Vulnerability Auditing', lessons: ['Reentrancy Guards', 'Formal Verification'] }
    ]
  }
];

export class CurriculumManager {
  constructor(tracks = DEFAULT_TRACKS) {
    this.tracks = tracks;
  }

  getTracks() {
    return this.tracks;
  }

  getTrackById(id) {
    return this.tracks.find(t => t.id === id) || null;
  }
}

export const defaultCurriculum = new CurriculumManager();
