import { Product } from "@/context/product/domain/entities/Product";

interface ProductDTO {
  id: Product["id"];
  name: string;
  description: string;
  price: number;
  availability: boolean;
}

export default ProductDTO;