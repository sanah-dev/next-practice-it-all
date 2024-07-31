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
async function ListPage({ params }: { params: { id: string } }) {
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
}

// ! 잘 배포되었는데 갑자기 안되는 이유가 대체 뭘까? vercel에서 아래와 같은 오류가 발생한다.
// !
// ! Failed to compile.
// ! app/list/[id]/page.tsx
// ! Type error: Page "app/list/[id]/page.tsx" has an invalid "default" export:
// !   Type "{ name: string; }" is not valid.
// ! Error: Command "npm run build" exited with 1
// !
// ! 이해가 안되었음 vercel에 배포하는데 'Next.js의 페이지 컴포넌트는 async 함수로 정의될 수 없음' 이 무슨말이지
// ! GPT의 도움을 요청해보자

export default ListPage;
