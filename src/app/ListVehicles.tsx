async function getVehicles() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return ["RS5", "M2", "M3", "RS6"];
}

export async function ListVehicles() {
  const vehicles = await getVehicles();
  return (
    <ul>
      {vehicles.map((vehicle: string) => (
        <li key={vehicle}>{vehicle}</li>
      ))}
    </ul>
  );
}