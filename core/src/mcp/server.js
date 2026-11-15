/**
 * Course-OS Model Context Protocol (MCP) Server
 */

import readline from 'readline';
import { CurriculumManager } from '../curriculum.js';
import { CourseEvaluator } from '../evaluator.js';

export class CourseMcpServer {
  constructor() {
    this.curriculum = new CurriculumManager();
    this.evaluator = new CourseEvaluator();
  }

  getTools() {
    return [
      {
        name: 'course_list_tracks',
        description: 'Enumerate available open-source learning tracks and syllabus modules.',
        inputSchema: { type: 'object', properties: {} }
      },
      {
        name: 'course_eval_exercise',
        description: 'Evaluate student code exercise submission against track invariants.',
        inputSchema: {
          type: 'object',
          properties: {
            trackId: { type: 'string' },
            code: { type: 'string' }
          },
          required: ['trackId', 'code']
        }
      },
      {
        name: 'course_issue_cert',
        description: 'Generate verified digital completion certificate for a student.',
        inputSchema: {
          type: 'object',
          properties: {
            studentName: { type: 'string' },
            trackTitle: { type: 'string' }
          },
          required: ['studentName', 'trackTitle']
        }
      },
      {
        name: 'course_status',
        description: 'Inspect Course-OS version, tracks, and founder contact.',
        inputSchema: { type: 'object', properties: {} }
      }
    ];
  }

  async handleCallTool(name, args) {
    switch (name) {
      case 'course_list_tracks': {
        const tracks = this.curriculum.getTracks();
        return { content: [{ type: 'text', text: JSON.stringify(tracks, null, 2) }] };
      }
      case 'course_eval_exercise': {
        const result = this.evaluator.evaluateExercise(args.trackId, args.code);
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
      }
      case 'course_issue_cert': {
        const cert = this.evaluator.issueCertificate(args.studentName, args.trackTitle);
        return { content: [{ type: 'text', text: JSON.stringify(cert, null, 2) }] };
      }
      case 'course_status': {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({
              product: 'Course-OS',
              version: '1.0.0',
              tracksCount: this.curriculum.getTracks().length,
              founder: 'Amit Sharma (@1nsharma) — Kanpur, India',
              contact: 'amitsharma9976@gmail.com',
              upi: '6393741171@upi'
            }, null, 2)
          }]
        };
      }
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  }

  startStdio() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
    rl.on('line', async (line) => {
      if (!line.trim()) return;
      try {
        const req = JSON.parse(line);
        const res = await this.handleRpc(req);
        if (res) process.stdout.write(JSON.stringify(res) + '\n');
      } catch (err) {
        process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32603, message: err.message } }) + '\n');
      }
    });
  }

  async handleRpc(req) {
    const { id, method, params } = req;
    if (method === 'initialize') {
      return {
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          serverInfo: { name: 'course-os-mcp', version: '1.0.0' },
          capabilities: { tools: {} }
        }
      };
    }
    if (method === 'tools/list') return { jsonrpc: '2.0', id, result: { tools: this.getTools() } };
    if (method === 'tools/call') {
      try {
        const res = await this.handleCallTool(params.name, params.arguments || {});
        return { jsonrpc: '2.0', id, result: res };
      } catch (err) {
        return { jsonrpc: '2.0', id, error: { code: -32000, message: err.message } };
      }
    }
    return null;
  }
}

export function startMcpServer() {
  const server = new CourseMcpServer();
  server.startStdio();
}

if (process.argv[1] && process.argv[1].endsWith('server.js')) {
  startMcpServer();
}
