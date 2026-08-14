import text from "./todoapp.txt?raw";

export default function TodoApp() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
