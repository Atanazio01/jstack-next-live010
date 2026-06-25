//Server Component

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.log("Oi, belezinha?")

  return (
    <div>
      <button onClick={() => alert('Ok')}>
        Clicou
      </button>
    </div>
  );
}
