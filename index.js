async function copyStringToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);

    // 성공 메시지 - 생략
  } catch (error) {
    // 실패 처리
    alert("복사에 실패했습니다: " + error.message);
  }
}

const selectedLanguage = document.querySelector(
  "#language_chosen a span"
).textContent;
const isTextareaEmpty =
  document.querySelector(".CodeMirror-code div pre span span").textContent ==
  "\u200B";
if (selectedLanguage === "node.js" && isTextareaEmpty) {
  const userConfirm = confirm(
    "Node.js 백준 fs 코드 복사 하기\n const input = require('fs').readFileSync(0).toString().trim()"
  );

  if (userConfirm) {
    const textToCopy =
      "const input = require('fs').readFileSync(0).toString().trim()";
    copyStringToClipboard(textToCopy);
  }
}
