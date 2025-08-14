import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function useLinkify(text) {
  return useMemo(() => {
    if (typeof text !== "string") return text;

    const regex = /(https?:\/\/[^\s":]+|www\.[^\s":]+|\/\/[^\s":]+)(::"([^"]+)")?/g;

    const elements = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const url = match[1];
      const label = match[3];
      const index = match.index;

      if (index > lastIndex) {
        elements.push(text.slice(lastIndex, index));
      }

      if (url.startsWith("//")) {
        const internalRoute = url.slice(1);

        const handleClick = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };

        elements.push(
          <Link
            key={index}
            to={internalRoute}
            onClick={handleClick}
            className="link"
          >
            {label || internalRoute}
          </Link>
        );
      } else {
        const href = url.startsWith("www.") ? `https://${url}` : url;
        elements.push(
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {label || url}
          </a>
        );
      }

      lastIndex = index + match[0].length;
    }

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return <p>{elements}</p>;
  }, [text]);
}
