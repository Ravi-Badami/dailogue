import { useEffect, useRef, useState } from 'react';
import Avatar from '../../assets/Avatar.png';
import Input from '../../components/Input/index';
import { io } from 'socket.io-client';

const Dashboard = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const messageRef = useRef(null);

  console.log('user:>>', user);

  useEffect(() => {
    setSocket(io('https://dailogue.onrender.com'));
  }, []);

  useEffect(() => {
    socket?.emit('addUser', user?.id);
    socket?.on('getUsers', (users) => {
      console.log('activeUsers :>> ', users);
    });
    socket?.on('getMessage', (data) => {
      setMessages((prev) => ({
        ...prev,
        messages: [...prev.messages, { user: data.user, message: data.message }],
      }));
    });
  }, [socket]);

  useEffect(() => {
    messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages?.messages]);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));
    const fetchConversations = async () => {
      const res = await fetch(
        `https://dailogue.onrender.com/api/conversations/${loggedInUser?.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const resData = await res.json();
      setConversations(resData);
    };
    fetchConversations();
  }, [message]);

  useEffect(() => {
    messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages?.messages]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://dailogue.onrender.com/api/users/${user?.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resData = await res.json();
      console.log('users:>>', resData);
      setUsers(resData);
    };
    fetchUsers();
  }, []);

  console.log('conversation ::>>', conversations);

  const fetchMessages = async (conversationId, receiver) => {
    const res = await fetch(
      `https://dailogue.onrender.com/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const resData = await res.json();
    setMessages({ messages: resData, receiver, conversationId });
  };
  const sendMessage = async (e) => {
    setMessage('');
    socket?.emit('sendMessage', {
      senderId: user?.id,
      receiverId: messages?.receiver?.receiverId,
      message,
      conversationId: messages?.conversationId,
    });

    const res = await fetch(`https://dailogue.onrender.com/api/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        conversationId: messages?.conversationId,
        senderId: user?.id,
        message,
        receiverId: messages?.receiver?.receiverId,
      }),
    });
  };

  return (
    <div className='w-screen flex bg-blue-100'>
      <div className='w-[25%] h-screen bg-secondary '>
        <div className='flex justify-center items-center py-8 border-b border-b-gray-600'>
          <div className='border  p-[2px] rounded-full'>
            <img src={Avatar} alt='' width={75} height={75} />
          </div>
          <div className='ml-8'>
            <h3 className='text-2xl'>{user?.fullName}</h3>
            <p className='text-lg font-light'>My Account</p>
          </div>
        </div>
        <hr />
        <div className=''>Messages</div>
        <div className=''>
          {conversations.length > 0 ? (
            conversations.map(({ conversationId, user }) => {
              return (
                <div
                  className='flex justify-center cursor-pointer hover:bg-gray-200 items-center  py-8 border-b border-b-gray-300 '
                  key={conversationId}
                  onClick={() => fetchMessages(conversationId, user)}>
                  <div className='border border-primary p-[2px] rounded-full'>
                    <img src={Avatar} alt='' width={50} height={50} />
                  </div>
                  <div className='ml-8'>
                    <h3 className='text-2xl'>{user.fullName}</h3>
                    <p className='text-lg font-light'>{user.email}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No conversations</div>
          )}
        </div>
      </div>
      <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
        {messages?.receiver?.fullName && (
          <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex  items-center px-14 '>
            <div className=''>
              <img src={Avatar} width={60} className='cursor-pointer' height={60} alt='' />
            </div>

            <div className='ml-6 mr-auto'>
              <h3 className='text-lg'>{messages?.receiver?.fullName}</h3>
              <p className='text-sm font-light text-gray-600'>{messages?.receiver?.email}</p>
            </div>
            <div className=' cursor-pointer'>
              <img
                src='https://www.svgrepo.com/show/521542/call-out.svg'
                className='h-10 w-10'
                alt=''
              />
            </div>
          </div>
        )}

        <div className='h-[75%]  w-full overflow-scroll shadow-sm '>
          <div className=' p-14'>
            {messages?.messages?.length > 0 ? (
              messages.messages.map(({ message, user: { id } = {} }) => {
                return (
                  <>
                    <div
                      className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${
                        id === user?.id
                          ? 'bg-primary text-white rounded-tl-xl ml-auto'
                          : 'bg-secondary rounded-tr-xl'
                      } `}>
                      {message}
                    </div>
                    <div ref={messageRef}></div>
                  </>
                );
              })
            ) : (
              <div className='text-center text-lg font-semibold mt-24'>
                No Messages or No Conversation Selected
              </div>
            )}
          </div>
        </div>
        {messages?.receiver?.fullName && (
          <div className='p-14 w-full flex items-center'>
            <Input
              placeholder='Type a message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              inputClassname=' p-4  border-0 shadow-lg rounded-full focus:ring-0 focus:border-0 outline-none'
              className='w-full'></Input>
            <div
              className={`ml-4 p-4 cursor-pointer bg-light rounded-full ${
                !message && 'pointer-events-none'
              } hover:bg-gray-200`}
              onClick={() => sendMessage()}>
              <img src='https://www.svgrepo.com/show/533306/send.svg' className='h-8 w-8' alt='' />
            </div>
            <div className=''>
              <img src='https://www.svgrepo.com/show/509200/plus.svg' className='h-8 w-8' alt='' />
            </div>
          </div>
        )}
      </div>

      <div className='w-[25%] h-screen bg-light overflow-y-scroll'>
        <div className=''>
          {users.length > 0 ? (
            users.map(({ userId, user }) => {
              return (
                <div
                  className='flex justify-center cursor-pointer hover:bg-gray-200 items-center  py-8 border-b border-b-gray-300 '
                  key={userId}
                  onClick={() => fetchMessages('new', user)}>
                  <div className='border border-primary p-[2px] rounded-full'>
                    <img src={Avatar} alt='' width={50} height={50} />
                  </div>
                  <div className='ml-8'>
                    <h3 className='text-2xl'>{user.fullName}</h3>
                    <p className='text-lg font-light'>{user.email}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No users</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
