export const metadata = {
  title: 'About',
};

export default async function AboutPage() {
  return (
    <div className={'container'}>
      <h1 className={'title'}>About Us</h1>
      <p className={'text'}>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </p>
    </div>
  );
}
