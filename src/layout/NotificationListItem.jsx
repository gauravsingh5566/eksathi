import { Avatar } from '@mui/joy';
import { useGlobalContext } from 'global/context';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const NotificationListItem = ({ data, reload }) => {
    const { api, userData } = useGlobalContext();
    const handleRead = async () => {
        console.log("Marked as read: ", data?.id);
        try {
            const res = await api.put(`/app/notification`, { notificationId: data?.id });
            if (res?.status === 200) {
                data = { ...data, is_read: 1 };
                reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleLink = (notificationType, contentId, slug) => {
        switch (notificationType) {
            case 1: 
            return `/questions/${slug}#${contentId}`;
            case 3: 
            return `/questions`
            case 4: 
            return `/questions`
           
            default: 
            return "/notifications"
        }
    };

    return (
        <>
            <li onClick={handleRead}>
                <Link to={handleLink(data?.notification_type, data?.content_id, data?.slug)} className='d-flex justify-content-between p-3 hover-bg rounded-3 mb-1 pointer'>
                    <div className='d-flex align-items-center '>
                        <div>

                            <Avatar
                                alt={data?.first_name + ' ' + data?.last_name}
                                src={data?.avatar_url}
                                className="mr-3"
                                sx={{
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </div>
                        <div className='' style={{
                            lineHeight: "20px",
                            fontSize: '14px'
                        }}>
                            <p className={`${data?.is_read ? "text-dark" : "fw-bold text-info"}`}>{data?.message}</p>
                            <p className='fs-11 text-secondary'>{moment(data?.createdAt).fromNow()}</p>


                        </div>
                    </div>

                </Link>
            </li>
        </>
    )
}

export default NotificationListItem;