import { Metadata } from 'next';
import Navigation from '../components/navigation';
import '../styles/global.css';
import styles from '../styles/common.module.scss';

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
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css'
          rel='stylesheet'
        />
      </head>
      <body>
        <Navigation />
        <section className={styles.contents}>{children}</section>
      </body>
    </html>
  );
}
