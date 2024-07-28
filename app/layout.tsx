import { Metadata } from 'next';
import Navigation from '../components/navigation';
import '../styles/global.css';
import styles from '../styles/common.module.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The best movies on the best framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <section className={styles.contents}>{children}</section>
      </body>
    </html>
  );
}
