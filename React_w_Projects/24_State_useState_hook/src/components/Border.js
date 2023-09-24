export default function Border({ childern }) {
  return (
    <div style={{ border: "3px solid white", display: "inline-block" }}>
      {childern}
    </div>
  );
}
