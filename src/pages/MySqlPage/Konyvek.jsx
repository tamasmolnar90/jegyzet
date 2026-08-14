import text from "./konyvek.txt?raw";

export default function Konyvek() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
