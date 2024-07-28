import BookInfo, { getInfo } from '../../../components/bookInfo';
import commonStyles from '../../../styles/common.module.css';

interface IParams {
  params: { list_name_encoded: string };
}

export async function generateMetadata({
  params: { list_name_encoded },
}: IParams) {
  const info = await getInfo(list_name_encoded);
  return {
    name: info.list_name_encoded,
  };
}

export default async function ListCards({ name }: { name: string }) {
  const info = await getInfo(name);
  return (
    <div className={commonStyles.container}>
      <BookInfo name={name}></BookInfo>
    </div>
  );
}
