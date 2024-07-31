import Link from 'next/link';
import styles from './CategoryItem.module.scss'; // 필요한 스타일을 여기에 추가
import { ICategoryItemProps } from '@/types';

// * BookItem 컴포넌트 정의
const CategoryItem = ({ category }: { category: ICategoryItemProps }) => {
  const { list_name_encoded, display_name, image } = category;

  return (
    <li className={styles.item}>
      <Link href={`/list/${list_name_encoded}`}>
        {image ? (
          <>
            <div className={styles.bookImgBox}>
              <img src={image} alt={`${display_name} book`} />
            </div>
            {/* <div className={styles.emptyImg} /> */}
          </>
        ) : (
          <>
            <div className={styles.bookImgBox}>
              <img
                src={
                  'https://blog.kakaocdn.net/dn/bZMazR/btrT4qEKy1t/wNiOS3hKvmKCCCibNCqEpK/img.jpg'
                }
                alt={`${display_name} not image`}
              />
              {/* <img src={image} alt={`${display_name} book`} /> */}
            </div>
          </>
        )}
        <div className={styles.bookName}>{display_name}</div>
      </Link>
    </li>
  );
};

export default CategoryItem;
