/**
 * Automated Test Suite for Course-OS
 */

import assert from 'node:assert';
import { describe, it } from 'node:test';
import { CurriculumManager, DEFAULT_TRACKS } from '../core/src/curriculum.js';
import { CourseEvaluator } from '../core/src/evaluator.js';
import { CourseMcpServer } from '../core/src/mcp/server.js';

describe('Course-OS Curriculum Manager', () => {
  const curriculum = new CurriculumManager();

  it('should list all preloaded tracks', () => {
    assert.strictEqual(curriculum.getTracks().length, DEFAULT_TRACKS.length);
  });

  it('should find track by id', () => {
    const track = curriculum.getTrackById('ai-engineering');
    assert.ok(track);
    assert.strictEqual(track.level, 'Advanced');
    assert.ok(track.modules.length >= 2);
  });
});

describe('Course-OS Evaluator & Certificates', () => {
  const evaluator = new CourseEvaluator();

  it('should verify code exercise', () => {
    const result = evaluator.evaluateExercise('ai-engineering', 'function solve() { return true; }');
    assert.strictEqual(result.passed, true);
    assert.strictEqual(result.score, 100);
  });

  it('should issue verifiable certificate', () => {
    const cert = evaluator.issueCertificate('Arjun', 'Autonomous AI Engineering');
    assert.ok(cert.certificateId.startsWith('CERT-OS-'));
    assert.strictEqual(cert.recipientName, 'Arjun');
    assert.strictEqual(cert.verified, true);
  });
});

describe('Course-OS MCP Server', () => {
  const server = new CourseMcpServer();

  it('should register all 4 tools', () => {
    assert.strictEqual(server.getTools().length, 4);
  });

  it('should execute course_status tool', async () => {
    const res = await server.handleCallTool('course_status', {});
    const parsed = JSON.parse(res.content[0].text);
    assert.strictEqual(parsed.product, 'Course-OS');
    assert.strictEqual(parsed.upi, '6393741171@upi');
  });
});
