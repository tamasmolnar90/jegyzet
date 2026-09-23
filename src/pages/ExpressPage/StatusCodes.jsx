import text from "./statuscodes.txt?raw";

export default function StatusCodes() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
