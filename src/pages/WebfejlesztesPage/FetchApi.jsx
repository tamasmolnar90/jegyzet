import text from "./fetchapi.txt?raw";

export default function FetchApi() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
