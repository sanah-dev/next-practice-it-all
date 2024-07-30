import { API_BEST_SELLER } from '../../utils/api';
import commonStyles from '../../styles/common.module.scss';
import styles from '../../styles/home.module.scss';
import Link from 'next/link';

interface IBookProps {
  display_name: string;
  list_name_encoded: string;
}
interface IBook {
  results: IBookProps[];
}

export const metadata = {
  title: 'Home',
};

async function getBestSellers(): Promise<IBook> {
  const response = await fetch(`${API_BEST_SELLER}`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const books: IBook = await getBestSellers();

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>
        The New York Times Best Seller Explorer
      </h1>
      <ul className={styles.list}>
        {books.results.map((book, index) => (
          <li key={index} className={styles.item}>
            <Link href={`/list/${book.list_name_encoded}`}>
              {book.display_name} &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
