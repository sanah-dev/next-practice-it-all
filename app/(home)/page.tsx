import { API_BEST_SELLER } from '../../utils/api';
import BestSeller from '../../components/bestSeller';
import commonStyles from '../../styles/common.module.css';
import styles from '../../styles/home.module.css';

export const metadata = {
  title: 'Home',
};

async function getBestSellers() {
  const response = await fetch(`${API_BEST_SELLER}`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const books = await getBestSellers();

  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>
        The New York Times Best Seller Explorer
      </h1>
      <ul className={styles.list}>
        {books.results.map((book, i) => (
          <BestSeller
            display_name={book.display_name}
            list_name_encoded={book.list_name_encoded}
          ></BestSeller>
        ))}
      </ul>
    </div>
  );
}
