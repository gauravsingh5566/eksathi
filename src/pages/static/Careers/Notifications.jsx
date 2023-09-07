import { Avatar } from '@mui/joy'
import React, { useEffect, useState } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useGlobalContext } from 'global/context';
import { toast } from 'react-hot-toast';
import moment from 'moment';

const NotificationItem = ({data}) => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-3 hover-s shadow-sm rounded-3 mb-3'>
        <div className='d-flex '>
          <div>

            <Avatar
              alt={data?.message?.split(' ')[0] +" " + data?.message?.split(' ')[1]}
              src="https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
              className="mr-3"
              sx={{
                width: "60px",
                height: "60px"
              }}
            />
          </div>
          <div className='' style={{
            lineHeight: "20px"
          }}>
            <p className='text-dark'> <strong>{data?.message?.split(' ')[0] +" " + data?.message?.split(' ')[1]} </strong></p>
            <p className='fs-14'>{data?.message}</p>
            <p className='fs-11'>{moment(data?.createdAt).fromNow()}</p>
          </div>
        </div>
        <div>
          <img
            className='rounded-2'
            src='https://images.pexels.com/photos/8767784/pexels-photo-8767784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='logo'
            style={{ width: "60px", height: "60px" }} />

        </div>
      </div>
    </>
  );
}

function Notifications() {
  const { userData, api } = useGlobalContext();
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    try {
      const res = await api.get('/app/notification');
      if (res?.status === 200) {
        console.log('Notifications: ', res?.data);
        setNotifications(res?.data?.notifications);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error getting notifications");
    }
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className='container mb-3 my-5 ' style={{minHeight: 500}}>

      <h3 className='mb-4 fw-bold'>Notification <NotificationsNoneIcon className='fw-bold' color='info' /></h3>
      <div className=''>
        {
          notifications?.length ?
            notifications?.map((notification, key) => (
              <NotificationItem key={key} data={notification}/>
            ))
            :
            <>
              <h4>No notifications found</h4>
            </>
        }
      </div>
    </div>
  )
}

export default Notifications
