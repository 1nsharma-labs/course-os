#!/usr/bin/env node

/**
 * Course-OS CLI
 * 
 * Usage:
 *   npx course-os status
 *   npx course-os list
 *   npx course-os cert "Rahul Sharma" "Autonomous AI Engineering"
 *   npx course-os mcp
 */

import { CurriculumManager } from '../../core/src/curriculum.js';
import { CourseEvaluator } from '../../core/src/evaluator.js';
import { startMcpServer } from '../../core/src/mcp/server.js';

const args = process.argv.slice(2);
const command = args[0] || 'help';

async function main() {
  const curriculum = new CurriculumManager();
  const evaluator = new CourseEvaluator();

  switch (command) {
    case 'status': {
      printBanner();
      console.log('🎓 Course-OS Architecture:');
      console.log('   ├── Open-Source Interactive Learning Platform');
      console.log('   ├── In-Browser Code Lab & Invariant Verifier');
      console.log('   ├── Cryptographically Verifiable Digital Certificates');
      console.log('   └── Model Context Protocol (MCP) Server\n');
      console.log(`📚 Preloaded Tracks: ${curriculum.getTracks().length}`);
      console.log('💼 Founder: Amit Sharma (@1nsharma) — Kanpur, India');
      console.log('📧 Contact: amitsharma9976@gmail.com');
      console.log('💳 Direct UPI / Bank: 6393741171@upi (6393741171)\n');
      break;
    }

    case 'list': {
      console.log('\n📚 Available Course-OS Learning Tracks:\n');
      for (const t of curriculum.getTracks()) {
        console.log(`   🎯 [${t.id.padEnd(18)}] ${t.title.padEnd(46)} (${t.durationHours} hrs) [${t.level}]`);
      }
      console.log('\n');
      break;
    }

    case 'cert': {
      const name = args[1] || 'Vikramaditya';
      const track = args[2] || 'Autonomous AI Engineering';
      const cert = evaluator.issueCertificate(name, track);

      console.log('\n🏆 Verifiable Certificate Issued:');
      console.log('----------------------------------------------------------------------');
      console.log(`Certificate ID : \x1b[32m${cert.certificateId}\x1b[0m`);
      console.log(`Recipient      : ${cert.recipientName}`);
      console.log(`Course Title   : ${cert.courseTitle}`);
      console.log(`Issued By      : ${cert.issuer}`);
      console.log(`Verification   : \x1b[36m${cert.badgeUrl}\x1b[0m`);
      console.log('----------------------------------------------------------------------\n');
      break;
    }

    case 'mcp': {
      startMcpServer();
      break;
    }

    case 'help':
    default: {
      printBanner();
      console.log('Usage:');
      console.log('  course-os status                    Inspect engine status');
      console.log('  course-os list                      List available curriculum tracks');
      console.log('  course-os cert <name> <trackTitle>  Generate verifiable certificate');
      console.log('  course-os mcp                       Start MCP stdio server');
      console.log('\nLive Web App:');
      console.log('  https://1nsharma-labs.github.io/course-os/\n');
      break;
    }
  }
}

function printBanner() {
  console.log(`
\x1b[32m   ██████╗ ██████╗ ██╗   ██╗██████╗ ███████╗███████╗     ██████╗ ███████╗
  ██╔════╝██╔═══██╗██║   ██║██╔══██╗██╔════╝██╔════╝    ██╔═══██╗██╔════╝
  ██║     ██║   ██║██║   ██║██████╔╝███████╗█████╗      ██║   ██║███████╗
  ██║     ██║   ██║██║   ██║██╔══██╗╚════██║██╔══╝      ██║   ██║╚════██║
  ╚██████╗╚██████╔╝╚██████╔╝██║  ██║███████║███████╗    ╚██████╔╝███████║
   ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝     ╚═════╝ ╚══════╝\x1b[0m
  The Open-Source Interactive Learning & Course Engine
  by 1nsharma-labs | Amit Sharma (Kanpur, India)
  `);
}

main().catch(err => {
  console.error('\nFatal Error:', err);
  process.exit(1);
});
