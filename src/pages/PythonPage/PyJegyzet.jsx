import text from "./pyjegyzet.txt?raw";

export default function PyJegyzet() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
