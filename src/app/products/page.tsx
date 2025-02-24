import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ProductsPage = () => {
  return (
    <div className="rounded-lg border-b border-red-500 p-4">
      <div className="text-red-500">Products</div>
      <Button>Add Product</Button>
      <Input placeholder="Search" />
    </div>
  );
};

export default ProductsPage;
