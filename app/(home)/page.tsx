import { API_BEST_SELLER, API_BOOK_INFO } from '@/utils/api';
import HomeStyles from './Home.module.scss';
import CategoryItem from '@/components/CategoryItem';
import { IBestSellers, IBookItem, IBookItemProps } from '@/types';
import Cover from '@/components/Cover';

// * 메타데이터 설정
export const metadata = {
  title: 'Home',
};

// * API 호출: 베스트셀러 카테고리 가져오기
async function getBestSellers(): Promise<IBestSellers> {
  const response = await fetch(API_BEST_SELLER);
  if (!response.ok) {
    throw new Error('Failed to fetch best sellers');
  }
  return response.json();
}

// * API 호출: 카테고리들의 책 정보 가져오기
async function fetchBooksForCategory(
  categoryId: string
): Promise<IBookItemProps[]> {
  const response = await fetch(`${API_BOOK_INFO}${categoryId}`);
  const json: IBookItem = await response.json();
  console.log(JSON.stringify(json));
  return json.results.books;
}

// * HomePage 컴포넌트
export default async function HomePage() {
  const categories: IBestSellers = await getBestSellers();

  // * 카테고리들의 0번째 책 정보 가져오기
  const categoryBooks = await Promise.all(
    categories.results.map(async (category) => {
      const books = await fetchBooksForCategory(category.list_name_encoded);
      return {
        list_name_encoded: category.list_name_encoded,
        display_name: category.display_name,
        image: books.length > 0 ? books[0].book_image : null,
      };
    })
  );

  return (
    <>
      <Cover />
      <p className={'title'}>Book Category</p>

      <ul className={HomeStyles.list}>
        {categoryBooks.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </ul>
    </>
  );
}
