import { Head, ProductHead } from "./components";
import { Product } from "./inderfaces";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Accounts } from "./components/Accounts";

const product: Product = {
  name: "Speciaal product",
  price: 10,
};

function App() {
  return (
    <div>
      <Head title="Hello World" isActive={true} />
      <ProductHead product={product} />
      <Button onClick={(e) => console.log("Yeee")}>Heye</Button>
      <Input></Input>
      <Accounts />
    </div>
  );
}

export default App;
