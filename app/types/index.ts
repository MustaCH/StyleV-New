export interface ProductType {
  id: number;
  name: string;
  quantity: number;
  price: number;
  pics: string[];
  measures: {
    A: string;
    B: string;
    C: string;
    D?: string;
  };
  color: string;
  category: string;
}

export interface CategoryType {
  nombre: string;
  id: number;
  subtitulo: string;
  productos: object;
}
