export type Product  = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    subcategory: string;
    size: string[];
}

export type SimilarProductsProps = {
    product: Product;
  };