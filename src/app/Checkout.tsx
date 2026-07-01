"use client";

export default function Checkout({ list }: { list: React.ReactNode }) {
  return (
    <div>
      <button onClick={() => alert("Button clicked")}>Click me</button>
      {list}
    </div>
  );
}
