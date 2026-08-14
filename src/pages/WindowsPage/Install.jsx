import text from "./install.txt?raw";

export default function Install() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
