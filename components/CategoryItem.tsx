import { IBookItemProps } from '@/components/BookItem';
import Link from 'next/link';
import styles from './CategoryItem.module.scss'; // 필요한 스타일을 여기에 추가

// * 인터페이스 정의
interface ICategoryItemProps {
  list_name_encoded: string;
  display_name: string;
  image: string | null;
}

// * BookItem 컴포넌트 정의
const CategoryItem = ({ category }: { category: ICategoryItemProps }) => {
  const { list_name_encoded, display_name, image } = category;

  return (
    <li className={styles.item}>
      <Link href={`/list/${list_name_encoded}`}>
        {display_name} &rarr;
        {image ? (
          <img src={image} alt={`${display_name} book`} />
        ) : (
          <p>No image available</p>
        )}
      </Link>
    </li>
  );
};

export default CategoryItem;
