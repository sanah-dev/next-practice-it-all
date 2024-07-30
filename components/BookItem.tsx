import { IBookItemProps } from '@/types';
import styles from './BookItem.module.scss';
import { IconShop } from './Icon';
import FavoriteButton from './FavoriteButton';

const BookItem = ({ book }: { book: IBookItemProps }) => (
  <li className={styles.item}>
    <div className={styles.imgBox}>
      <img
        src={book.book_image}
        alt={book.title}
        className={styles.bookImage}
      />
    </div>
    <div className={styles.textBox}>
      <div>
        <span className={styles.bookName}>{book.title}</span>
        <span className={styles.bookAuthor}>{book.author}</span>
      </div>
      <a href={book.amazon_product_url} className={styles.btnBuy}>
        <IconShop />
        <span>Buy Now</span>
      </a>
      <FavoriteButton />
    </div>
  </li>
);

export default BookItem;
