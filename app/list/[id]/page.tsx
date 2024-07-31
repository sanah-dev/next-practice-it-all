import { API_BOOK_INFO } from '@/utils/api';
import { Metadata } from 'next';
import BookItem from '@/components/BookItem';
import BookStyles from '@/components/BookItem.module.scss';
import { IBookList } from '@/types';
import PrevButton from '@/components/PrevButton';

// * 메타데이터 생성 함수
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const bookList = await fetchBookList(params.id);
  return {
    title: bookList.results.list_name,
  };
}

// * API 호출: 책 리스트 정보 가져오기
async function fetchBookList(id: string): Promise<IBookList> {
  const response = await fetch(`${API_BOOK_INFO}${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch book list for ID: ${id}`);
  }
  return response.json();
}

// * ListPage 컴포넌트 정의
const ListPage = async ({ params }: { params: { id: string } }) => {
  const bookList = await fetchBookList(params.id);
  return (
    <>
      <h1 className={'title'}>
        <PrevButton />
        <span>{bookList.results.list_name} Books</span>
      </h1>
      <ul className={BookStyles.list}>
        {bookList.results.books.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </ul>
    </>
  );
};
export default ListPage;
