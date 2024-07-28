import styles from '../styles/bestSeller.module.css';
import Link from 'next/link';

interface IBookProps {
  display_name: string;
  list_name_encoded: string;
}

export default function BestSeller({
  display_name,
  list_name_encoded,
}: IBookProps) {
  return (
    <>
      <li className={styles.item}>
        <Link href={`/list/${list_name_encoded}`}>{display_name} ➡️ </Link>
      </li>
    </>
  );
}
