import { API_BOOK_INFO } from '../utils/api';
import styles from '../styles/info.module.css';
import Link from 'next/link';

export async function getInfo(name: string) {
  const response = await fetch(`${API_BOOK_INFO}${name}`);
  const json = response.json();
  return json;
}

export default async function BookInfo({ name }: { name: string }) {
  const info = await getInfo(name);
  return (
    <ul className={styles.list}>
      {info.map((info) => {
        <li className={styles.item}>
          <img src={info.books.book_image} alt={info.list_name} />
          <span className={styles.title}>{info.list_name}</span>
          <span className={styles.author}>{info.author}</span>
          <Link href={info.buy_links[0].url} className={styles.btn}>
            Buy now ➡️
          </Link>
        </li>;
      })}
    </ul>
  );
}
