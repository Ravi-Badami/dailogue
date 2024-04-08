import Avatar from '../../assets/Avatar.png';
import Input from '../../components/Input/index';

const Dashboard = () => {
  const contacts = [
    {
      name: 'Ravi',
      status: 'Availabele',
      img: Avatar,
    },
    {
      name: 'falkeen',
      status: 'Availabele',
      img: Avatar,
    },
    {
      name: 'Harsha',
      status: 'Availabele',
      img: Avatar,
    },
    {
      name: 'Gagana',
      status: 'Availabele',
      img: Avatar,
    },
  ];
  return (
    <div className='w-screen flex bg-blue-100'>
      <div className='w-[25%] h-screen bg-secondary '>
        <div className='flex justify-center items-center py-8 border-b border-b-gray-600'>
          <div className='border  p-[2px] rounded-full'>
            <img src={Avatar} alt='' width={75} height={75} />
          </div>
          <div className='ml-8'>
            <h3 className='text-2xl'>Tutorial dev</h3>
            <p className='text-lg font-light'>My Account</p>
          </div>
        </div>
        <hr />
        <div className=''>Messages</div>
        <div className=''>
          {contacts.map(({ name, status, img }) => {
            return (
              <div
                className='flex justify-center cursor-pointer hover:bg-gray-200 items-center  py-8 border-b border-b-gray-300 '
                key={name}>
                <div className='border border-primary p-[2px] rounded-full'>
                  <img src={Avatar} alt='' width={50} height={50} />
                </div>
                <div className='ml-8'>
                  <h3 className='text-2xl'>Tutorial dev</h3>
                  <p className='text-lg font-light'>My Account</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
        <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex  items-center px-14 '>
          <div className=''>
            <img src={Avatar} width={60} className='cursor-pointer' height={60} alt='' />
          </div>

          <div className='ml-6 mr-auto'>
            <h3 className='text-lg'>Alexender</h3>
            <p className='text-sm font-light text-gray-600'>online</p>
          </div>
          <div className=' cursor-pointer'>
            <img
              src='https://www.svgrepo.com/show/521542/call-out.svg'
              className='h-10 w-10'
              alt=''
            />
          </div>
        </div>

        <div className='h-[75%]  w-full overflow-scroll shadow-sm '>
          <div className=' p-14'>
            <div className=' max-w-[40%] bg-secondary rounded-tr-xl rounded-b-xl p-4 mb-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam recusandae amet,
              facere incidunt reiciendis eos
            </div>
            <div className='max-w-[40%] bg-primary rounded-tl-xl rounded-b-xl p-4 ml-auto text-white mb-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A itaque commodi odio rem
              animi! Eveniet eius libero exercitationem
            </div>
            <div className=' max-w-[40%] bg-secondary rounded-tr-xl rounded-b-xl p-4 mb-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam recusandae amet,
              facere incidunt reiciendis eos
            </div>
            <div className=' max-w-[40%] bg-primary rounded-tl-xl rounded-b-xl p-4 ml-auto text-white mb-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A itaque commodi odio rem
              animi! Eveniet eius libero exercitationem
            </div>
          </div>
        </div>
        <div className='p-14 w-full flex items-center'>
          <Input
            placeholder='Type a message'
            inputClassname=' p-4  border-0 shadow-lg rounded-full focus:ring-0 focus:border-0 outline-none'
            className='w-full'></Input>
          <div className='ml-4 p-4 cursor-pointer bg-light rounded-full hover:bg-gray-200'>
            <img src='https://www.svgrepo.com/show/533306/send.svg' className='h-8 w-8' alt='' />
          </div>
          <div className=''>
            <img src='https://www.svgrepo.com/show/509200/plus.svg' className='h-8 w-8' alt='' />
          </div>
        </div>
      </div>

      <div className='w-[25%] h-screen bg-light'></div>
    </div>
  );
};

export default Dashboard;
