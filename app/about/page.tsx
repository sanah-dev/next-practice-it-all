import commonStyles from '../../styles/common.module.scss';

export const metadata = {
  title: 'About',
};

export default async function AboutPage() {
  return (
    <div className={commonStyles.container}>
      <h1 className={commonStyles.title}>About Us</h1>
      <p className={commonStyles.text}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </p>
    </div>
  );
}
