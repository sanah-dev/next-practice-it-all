'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import { IconAbout, IconFav, IconHome, IconLogo } from './Icon';

// * Navigation 컴포넌트 정의
const Navigation = () => {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>
        <IconLogo />
      </h1>
      <span>menu</span>

      <ul className={styles.menu}>
        <li>
          <Link
            href='/'
            className={
              path === '/' || path.startsWith('/list') ? styles.active : ''
            }
          >
            <i className={styles.icon}>
              <IconHome />
            </i>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className={path === '/about' ? styles.active : ''}
          >
            <i className={styles.icon}>
              <IconAbout />
            </i>
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href='/my' className={path === '/my' ? styles.active : ''}>
            <i className={styles.icon}>
              <IconFav />
            </i>
            <span>my</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
