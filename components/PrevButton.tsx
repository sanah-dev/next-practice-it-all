'use client';

import { useRouter } from 'next/navigation';
import { IconArrowLeft } from '@/components/Icon';

const PrevButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/');
  };

  return (
    <i className='prevBtn' onClick={onClick}>
      <IconArrowLeft />
    </i>
  );
};

export default PrevButton;
