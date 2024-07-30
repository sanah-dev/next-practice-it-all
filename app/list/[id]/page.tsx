import Link from 'next/link';
import { API_BOOK_INFO } from '../../../utils/api';
import styles from '../../../styles/list.module.scss';
import commonStyles from '../../../styles/common.module.scss';
import { Metadata } from 'next';

interface IList {
  results: {
    list_name: string;
    books: IBook[];
  };
}

interface IBook {
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const book = await getBook(params.id);
  return {
    title: book.results.list_name,
  };
}

async function getBook(id: string): Promise<IList> {
  const response = await fetch(`${API_BOOK_INFO}${id}`);
  const json = await response.json();
  return json;
}

const ListPage = async ({ params }: { params: { id: string } }) => {
  const book = await getBook(params.id);

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>{book.results.list_name} Books</h1>
      <ul className={styles.list}>
        {book.results.books.map((book: IBook, i) => (
          <li key={i} className={styles.item}>
            <img src={book.book_image} alt={book.title} />
            <div className={styles.textBox}>
              <div>
                <span className={styles.title}>{book.title}</span>
                <span className={styles.author}>{book.author}</span>
              </div>
              <Link href={book.amazon_product_url} className={styles.btn}>
                <span>Buy Now &rarr;</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
