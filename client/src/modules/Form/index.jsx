import Input from '../../components/Input';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && { fullName: '' }),
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log('data :>>', data);
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/api/${isSignInPage ? 'login' : 'register'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status === 400) {
      alert('Invalid credentials');
    } else {
      const resData = await res.json();
      if (resData.token) {
        localStorage.setItem('user:token', resData.token);
        localStorage.setItem('user:detail', JSON.stringify(resData.user));
        navigate('/');
      }
    }
  };

  return (
    <div className='bg-white    md:w-[600px] md:h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
      <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'back'} </div>
      <div className='text-4xl font-light mb-5'>
        {isSignInPage ? 'Log in ' : 'Sign up'} now to get started
      </div>

      <div className='w-72'>
        <form onSubmit={(e) => handleSubmit(e)}>
          {!isSignInPage && (
            <Input
              label='Full Name'
              name='name'
              placeholder='Enter your Full name'
              className='mb-6'
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label='Email address'
            name='email'
            type='email'
            placeholder='Enter your Email'
            className='mb-6'
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label='password'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <div className='w-full flex items-center justify-center mt-5 '>
            <Button label={isSignInPage ? 'Log in ' : 'Sign up'} type='submit' />
          </div>
        </form>
        <div className='w-full flex items-center justify-center'>
          {isSignInPage ? 'New here ?' : ' Already have an account?'}
          <span
            className='text-primary cursor-pointer underline ml-1'
            onClick={() => navigate(`/user/${isSignInPage ? 'sign_up ' : 'sign_in'}`)}>
            {isSignInPage ? 'Sign up' : 'Log in'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
