import DefaultLayout from '../../layout/DefaultLayout';
import ConvoContainer from '../../components/Chat/ConvoContainer';

const Messages = () => {
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col gap-10">
        </div>
        <div className='flex sm:h-[450px] md:h-[550px]  overflow-hidden  drop-shadow-md bg-neutral-200 rounded-none'>
          <ConvoContainer />
                
        </div>
      </DefaultLayout>
      
    </>
  );
};

export default Messages;