'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.scss';

// * Navigation 컴포넌트 정의
const Navigation = () => {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/' className={path === '/' ? styles.active : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className={path === '/about' ? styles.active : ''}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
