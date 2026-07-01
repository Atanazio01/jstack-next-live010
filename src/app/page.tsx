import Checkout from './Checkout';
import { ListVehicles } from './ListVehicles';

// Composition and Client Composition Pattern

export default function Home() {
  return (
    <div>
      <Checkout list={<ListVehicles />}/>
    </div>
  );
}
