import styles from './BookItem.module.scss';

// * 인터페이스 정의
export interface IBook {
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}

// * BookItem 컴포넌트 정의
const BookItem = ({ book }: { book: IBook }) => (
  <li className={styles.item}>
    <img src={book.book_image} alt={book.title} className={styles.bookImage} />
    <div className={styles.textBox}>
      <div>
        <span className={styles.title}>{book.title}</span>
        <span className={styles.author}>{book.author}</span>
      </div>
      <a href={book.amazon_product_url} className={styles.btn}>
        <span>Buy Now &rarr;</span>
      </a>
    </div>
  </li>
);

export default BookItem;
