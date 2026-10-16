#!/usr/bin/env node
// SajuRoot 라이선스 키 발급 도구 (오너 전용)
// 사용: node scripts/generate-license.cjs <고객식별자 3~32자 영문대문자+숫자>
// 예:  node scripts/generate-license.cjs ORDER1042
// 시크릿은 service/experiment/js/license-secret.js와 동일해야 한다.
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const secretFile = path.join(__dirname, "..", "service", "experiment", "js", "license-secret.js");
const m = fs.readFileSync(secretFile, "utf8").match(/[0-9a-f]{64}/);
if (!m) {
  console.error("license-secret.js에서 시크릿을 찾지 못했다. 먼저 시크릿을 확인하라.");
  process.exit(1);
}
const SECRET = m[0];
const payload = (process.argv[2] || "").toUpperCase();
if (!/^[A-Z0-9]{3,32}$/.test(payload)) {
  console.error("고객식별자는 영문 대문자+숫자 3~32자여야 합니다. 예: ORDER1042");
  process.exit(1);
}
const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex").toUpperCase();
console.log("라이선스 키: SR-" + payload + "-" + sig);
console.log("(고객에게 전달 → 서비스 결과 화면 하단 라이선스 입력에 붙여넣기)");
