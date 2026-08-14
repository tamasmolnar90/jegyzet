import text from "./minitodo.txt?raw";

export default function MiniTodo() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
