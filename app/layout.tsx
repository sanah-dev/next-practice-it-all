import { Metadata } from 'next';
import '@/styles/globals.scss';
import Navigation from '@/components/Navigation';

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
        <section className='wrap'>
          <Navigation />
          <div className='contents'>{children}</div>
        </section>
      </body>
    </html>
  );
}
