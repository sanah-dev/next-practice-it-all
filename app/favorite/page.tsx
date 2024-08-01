export const metadata = {
  title: 'Favorite',
};

export default async function MyPage() {
  return (
    <>
      <h1 className='title'>My Favorite</h1>
      <p className='textArea'>
        If you want to save the book you're interested in, please click hearts
        ❤️
      </p>
    </>
  );
}
