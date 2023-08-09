import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      The World wants to know...
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'>Your Thoughts</span>
    </h1>
    <p className='desc text-center'>
      Go ahead and share them with the world, and discover other people's thoughts too.
    </p>

    <Feed />
  </section>
);

export default Home;
