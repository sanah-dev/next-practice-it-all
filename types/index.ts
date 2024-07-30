export interface ICategory {
  display_name: string;
  list_name_encoded: string;
}

export interface ICategoryItemProps {
  list_name_encoded: string;
  display_name: string;
  image: string | null;
}

export interface IBestSellers {
  results: ICategory[];
}

export interface IBookList {
  results: {
    list_name: string;
    books: IBookItemProps[];
  };
}

export interface IBookItem {
  results: {
    list_name?: string;
    list_name_encoded?: string;
    books: IBookItemProps[];
  };
}

export interface IBookItemProps {
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}
