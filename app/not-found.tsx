import { Metadata } from 'next';
import commonStyles from '@/styles/common.module.scss';

export const metadata: Metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.loading}>Not found </h2>
    </div>
  );
}
