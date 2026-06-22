#!/usr/bin/env node

/**
 * Admin User Registration Script
 * Usage: node scripts/register-admin.js [username] [password] [email]
 * Or run without args for interactive prompts
 */

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env.local');

// Load environment variables
dotenv.config({ path: envPath });

const ADMIN_REGISTRATION_SECRET = (process.env.ADMIN_REGISTRATION_SECRET || '').trim();
const BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

if (!ADMIN_REGISTRATION_SECRET) {
  console.error('❌ Error: ADMIN_REGISTRATION_SECRET not found in .env.local');
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function registerAdmin(username, password, email) {
  try {
    console.log(`\n📤 Registering admin user: ${username}`);
    console.log(`🔗 Endpoint: ${BASE_URL}/api/auth/register\n`);

    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role: 'admin',
        secret: ADMIN_REGISTRATION_SECRET,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Registration failed:', data.error || 'Unknown error');
      process.exit(1);
    }

    console.log('✅ Admin registered successfully!');
    console.log(`   Username: ${data.user.username}`);
    console.log(`   Role: ${data.user.role}`);
    console.log(`\n🔑 You can now log in at: ${BASE_URL}/upload-pdf`);
    rl.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);

  let username, password, email;

  if (args.length >= 2) {
    username = args[0];
    password = args[1];
    email = args[2] || 'admin@example.com';
  } else {
    console.log('🔐 Admin Registration Script\n');
    username = await question('Username: ');
    password = await question('Password: ');
    email = await question('Email (optional): ');
  }

  if (!username || !password) {
    console.error('❌ Username and password are required');
    rl.close();
    process.exit(1);
  }

  await registerAdmin(username, password, email || 'admin@example.com');
}

main();
