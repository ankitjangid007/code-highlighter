"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="codeSnippet">
      <SyntaxHighlighter language="javascript" style={vs}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button>{copied ? "Copied!" : "Copy"}</button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeSnippet;
