import CodeSnippet from "@/components/CodeSnippet";

export default function Home() {
  const code = `const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
`;

  return (
    <div>
      <CodeSnippet code={code} />
    </div>
  );
}
