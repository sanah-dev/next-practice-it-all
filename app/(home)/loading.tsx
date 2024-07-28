import commonStyles from '../../styles/common.module.css';

export default function Loading() {
  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.loading}>Loading...</h2>
    </div>
  );
}
