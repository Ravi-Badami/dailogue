const index = () => {
  return (
    <div>
      <a
        className='group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring'
        href='#'>
        <span className='absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500'></span>

        <span className='relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white'>
          Download
        </span>
      </a>
    </div>
  );
};

export default index;
