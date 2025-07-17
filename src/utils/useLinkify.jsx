import { useMemo } from "react";

export default function useLinkify(text) {
  return useMemo(() => {
    if (typeof text !== "string") return text;

    // This regex matches:
    // Group 1: URL starting with http(s):// or www.
    // Optional Group 3: link text inside ::"link text"
    const regex = /(https?:\/\/[^\s":]+|www\.[^\s":]+)(::"([^"]+)")?/g;

    const elements = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const url = match[1];
      const label = match[3]; // the link text inside quotes, if present
      const index = match.index;

      // Add any text before the URL
      if (index > lastIndex) {
        elements.push(text.slice(lastIndex, index));
      }

      // Normalize url, add https:// if missing
      const href = url.startsWith("www.") ? `https://${url}` : url;

      elements.push(
        <a key={index} href={href} target="_blank" className="link">
          {label || url}
        </a>
      );

      lastIndex = index + match[0].length;
    }

    // Add remaining text after last match
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return <p>{elements}</p>;
  }, [text]);
}
