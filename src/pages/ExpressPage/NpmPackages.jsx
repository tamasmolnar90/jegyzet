import text from "./npmpackages.txt?raw";

export default function NpmPackages() {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
}
