import commonStyles from '../../../styles/common.module.scss';

export default function Loading() {
  return (
    <div className={commonStyles.container}>
      <h2 className={commonStyles.loading}>Loading a book 📚</h2>
    </div>
  );
}
