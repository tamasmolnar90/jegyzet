import text from "./parancsok.txt?raw";

export default function Parancsok() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
