import { API_BEST_SELLER, API_BOOK_INFO } from '@/utils/api';
import HomeStyles from './Home.module.scss';
import CategoryItem from '@/components/CategoryItem';
import { IBestSellers, IBookItem, IBookItemProps } from '@/types';

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
  try {
    const response = await fetch(`${API_BOOK_INFO}${categoryId}`);
    const json: IBookItem = await response.json();

    // 성공적인지 확인(만약 false라면)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // API 응답 구조 확인 및 데이터 반환
    if (json && json.results && Array.isArray(json.results.books)) {
      return json.results.books;
    } else {
      throw new Error('Error: results.books 데이터가 없음');
    }
  } catch (error) {
    console.error('Error: fetching books => ', error);
    return []; // 또는 적절한 오류 처리를 추가
  }
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
      <p className={'title'}>Book Category</p>

      <ul className={HomeStyles.list}>
        {categoryBooks.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </ul>
    </>
  );
}
