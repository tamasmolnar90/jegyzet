import text from "./jegyzet.txt?raw";

export default function Jegyzet() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
