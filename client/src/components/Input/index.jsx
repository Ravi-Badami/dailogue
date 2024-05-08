const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  inputClassname = '',
  isRequired = false,
  placeholder = '',
  value = '',
  onChange = () => {},
}) => {
  return (
    <div className={`${className} `}>
      <label htmlFor={name} className='block overflow-hidden rounded-md  px-3 py-2 shadow-sm  '>
        <span className='text-xs font-medium text-gray-700'> {label} </span>

        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className={`mt-1 md:w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm  ${inputClassname}`}
          required={isRequired}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
