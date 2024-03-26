import Input from '../../components/Input';
import Button from '../../components/Button';

const Form = () => {
  return (
    <div className='bg-white    md:w-[600px] md:h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-4xl font-extrabold'>Welcome</div>
      <div className='text-4xl font-light mb-5'>Sign up now to get started</div>
      <div className='w-72'>
        <Input label='Full Name' name='name' placeholder='Enter your Full name' className='mb-6' />
        <Input label='Email address' name='email' placeholder='Enter your Email' className='mb-6' />
        <Input label='password' type='password' name='password' placeholder='Enter your password' />
        <div className='w-full flex items-center justify-center mt-5 '>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Form;
