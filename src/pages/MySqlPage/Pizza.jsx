import text from "./pizza.txt?raw";

export default function Pizza() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
