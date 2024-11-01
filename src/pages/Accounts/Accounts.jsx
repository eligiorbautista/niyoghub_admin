import TableThree from '../../components/Tables/TableThree';
import DefaultLayout from '../../layout/DefaultLayout';

const Accounts = () => {
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col gap-10">
        <TableThree />
      </div>
      </DefaultLayout>
    </>
  );
};

export default Accounts;
