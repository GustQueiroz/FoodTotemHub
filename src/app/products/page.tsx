import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ProductsPage = () => {
  return (
    <div className="p-4 border-b border-red-500 rounded-lg">
      <div className="text-red-500">Products</div>
      <Button>Add Product</Button>
      <Input placeholder="Search" />
    </div>
  );
};

export default ProductsPage;
