export const extractPlainText = (htmlString: string): string => {
  if (!htmlString) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent?.replace(/\s+/g, " ").trim() || "";
};
