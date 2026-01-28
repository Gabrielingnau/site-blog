import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="inter mb-4 text-md md:text-xl">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="inter mb-3 text-sm md:text-md text-gray-100">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="inter mb-6 font-normal leading-relaxed text-gray-200">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-bold size-3.5 text-gray-100">
            {children}
          </strong>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 space-y-2 text-gray-200">{children}</ul>
        ),

        li: ({ children }) => (
          <li className="leading-relaxed marker:text-gray-200">{children}</li>
        ),
        a: ({ href, children }) => {
          const isExternal = href?.startsWith("http");

          return (
            <a
              href={href}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-blue-300 underline underline-offset-2 decoration-blue-300/40
                hover:text-blue-200 hover:decoration-blue-200 transition-colors duration-200 font-medium"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
