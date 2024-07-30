import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return (
    <div className={'container'}>
      <h2 className={'loading'}>Not found </h2>
    </div>
  );
}
