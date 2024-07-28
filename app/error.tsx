'use client';

import commonStyles from '../styles/common.module.css';

export default function Error() {
  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.loading}>sorry something broke..</h2>
    </div>
  );
}
