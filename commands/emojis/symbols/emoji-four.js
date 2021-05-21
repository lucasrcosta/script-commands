#!/usr/bin/env node
//
// Dependency: clipboardy (https://github.com/sindresorhus/clipboardy)
// Install via npm: `npm install --g clipboardy`
//
// @raycast.schemaVersion 1
// @raycast.title :four:
// @raycast.mode silent
// @raycast.packageName Emojis
// @raycast.icon 4⃣

try {
  const clipboardy = require("clipboardy");
  clipboardy.writeSync("4⃣");
  console.log("copied!");
} catch (error) {
  if (error.message.includes("clipboardy")) {
    console.error("🚫 npm install -g clipboardy 🚫");
  } else {
    throw error;
  }
}
