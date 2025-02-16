import JSON5 from "json5";

function removeOutsideCurlyBraces(text: string) {
  const startPos = text.indexOf("{");
  const endPost = text.lastIndexOf("}");
  if (startPos < 0 || endPost < 0) throw new Error("Malformed JSON");

  return text.substring(startPos, endPost + 1);
}

function removeUnmatchedBrackets(text: string) {
  let squareCount = 0;
  let curlyCount = 0;
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "[") squareCount++;
    if (text[i] === "]") squareCount--;
    if (text[i] === "{") curlyCount++;
    if (text[i] === "}") curlyCount--;
    if (squareCount < 0) {
      squareCount++;
      continue;
    }
    if (curlyCount === 0) {
      curlyCount++;
      continue;
    }
    newText += text[i];
  }

  return `${newText}}`;
}

export function parseAiJson<T>(text: string): T {
  const jsonString = removeUnmatchedBrackets(removeOutsideCurlyBraces(text));

  return JSON5.parse(jsonString) as T;
}
