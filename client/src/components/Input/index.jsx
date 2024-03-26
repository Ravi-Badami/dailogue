const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  isRequired = false,
  placeholder,
}) => {
  return (
    <div className={`${className} `}>
      <label
        htmlFor={name}
        className='block overflow-hidden rounded-md border border-gray-400 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
        <span className='text-xs font-medium text-gray-700'> {label} </span>

        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className={`mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm `}
          required={isRequired}
        />
      </label>
    </div>
  );
};

export default Input;
