const Button = ({ label = 'Button', type = 'button', className = '', disabled = false }) => {
  return (
    <div className=''>
      <a
        className='group relative inline-block overflow-hidden border border-indigo-600 md:px-8 md:py-3 focus:outline-none focus:ring'
        href='#'>
        <span className='absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500'></span>

        <span className='relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white'>
          <button disabled={disabled} type={type}>
            {label}
          </button>
        </span>
      </a>
    </div>
  );
};

export default Button;
