# 🎓 Course-OS — Open-Source Interactive Learning & Course Engine

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Course--OS-10b981?style=for-the-badge" alt="Course OS">
  <img src="https://img.shields.io/badge/Lab-Zero--Login%20Interactive-00f0ff?style=for-the-badge" alt="Zero Login">
  <img src="https://img.shields.io/badge/Verification-Verifiable%20Certificates-ff8b3d?style=for-the-badge" alt="Certificates">
  <img src="https://img.shields.io/badge/MCP-Native%20Stdio-a855f7?style=for-the-badge" alt="MCP Server">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/badge/Origin-Kanpur%2C%20India-ff9933?style=for-the-badge" alt="Made in India">
</p>

<p align="center">
  <strong>The open-source interactive course and technical learning engine. Turn any repository or markdown syllabus into an in-browser interactive code lab with invariant verification and cryptographically signed digital certificates.</strong>
</p>

<p align="center">
  <a href="https://1nsharma-labs.github.io/course-os/"><strong>🌐 Live Interactive Course Portal (Zero Login)</strong></a> &bull;
  <a href="#quickstart"><strong>Quickstart</strong></a> &bull;
  <a href="#core-features"><strong>Core Features</strong></a> &bull;
  <a href="#sponsorship--monetization"><strong>Sponsorship</strong></a>
</p>

---

> [!NOTE]
> **Live Auto-Sponsorship Slot Available:**
> Reach 100,000+ software engineers, computer science students, and tech builders worldwide.
> **Book Slot:** Email [amitsharma9976@gmail.com](mailto:amitsharma9976@gmail.com) | Direct UPI: `6393741171@upi`

---

## 🏛️ What is Course-OS?

Traditional video course platforms trap students in passive lecture watching without hands-on verification.

**Course-OS** transforms curriculum into an executable software platform:
1. **In-Browser Code Lab:** Write and test real code invariants directly in the browser with sub-second feedback.
2. **Zero-Login Progression:** Instant access without mandatory account registration or paywalls.
3. **Cryptographically Verifiable Certificates:** Automatically issue completion credentials with unique verification IDs.
4. **Native Stdio MCP Server:** Exposes curriculum tracks and exercise evaluators to Cursor, Claude Desktop, and Antigravity.

---

## ⚡ Quickstart

### Instant CLI Execution (`npx`)

```bash
# Check Course-OS status
npx course-os status

# List available curriculum tracks
npx course-os list

# Generate a verifiable completion certificate
npx course-os cert "Rahul Sharma" "Autonomous AI Engineering"
```

### Local Setup & Testing

```bash
git clone https://github.com/1nsharma-labs/course-os.git
cd course-os

# Run unit tests
npm test

# Start Model Context Protocol (MCP) server
npm run mcp
```

---

## 🔌 Model Context Protocol (MCP) Integration

Connect Course-OS to Cursor, Claude Desktop, or Antigravity:

```json
{
  "mcpServers": {
    "course-os": {
      "command": "node",
      "args": ["/path/to/course-os/core/src/mcp/server.js"]
    }
  }
}
```

Exposed MCP Tools:
- `course_list_tracks`: Enumerate curriculum modules and tracks.
- `course_eval_exercise`: Validate submitted code solutions against test invariants.
- `course_issue_cert`: Generate verifiable digital completion credentials.

---

## 💼 Sponsorship, Support & Founder

Built by **Amit Sharma (@1nsharma)** from **Kanpur, India**.

- **Personal Email:** [amitsharma9976@gmail.com](mailto:amitsharma9976@gmail.com)
- **Direct UPI & Bank Transfer:** `6393741171@upi` &bull; PhonePe / Google Pay / Paytm: `6393741171`
- **Global Sponsorship:** [polar.sh/1nsharma-labs](https://polar.sh/1nsharma-labs) &bull; [GitHub Sponsors](https://github.com/sponsors/1nsharma)
- **Organization:** [github.com/1nsharma-labs](https://github.com/1nsharma-labs)

---

## 📄 License

Open-source under the [MIT License](LICENSE).
