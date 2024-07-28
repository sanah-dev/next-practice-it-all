import Link from 'next/link';
import { API_BOOK_INFO } from '../../../utils/api';
import styles from '../../../styles/book.module.css';
import commonStyles from '../../../styles/common.module.css';

export async function generateMetadata({ params: { id } }) {
  const book = await getBook(id);
  return {
    title: book.results.list_name,
  };
}

async function getBook(id: string) {
  const response = await fetch(`${API_BOOK_INFO}${id}`);
  const json = await response.json();
  return json;
}

export default async function List({ params: { id } }) {
  const book = await getBook(id);
  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>{book.results.list_name} Books</h1>
      <ul className={styles.list}>
        {book.results.books.map((book, i) => (
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
}
