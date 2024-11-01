// import CarouselTables from '../../components/Posts/CarouselTable';
import PostButtons from '../../components/Posts/PostButtons';
import DefaultLayout from '../../layout/DefaultLayout';

const Contents = () => {
  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col gap-10">
          <PostButtons />
          {/* <CarouselTables /> */}
        </div>
      </DefaultLayout>
      
    </>
  );
};

export default Contents;
