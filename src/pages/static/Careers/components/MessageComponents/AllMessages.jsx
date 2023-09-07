
import React, { useState, useEffect } from 'react'
import Message from './Message';
import { useGlobalContext } from 'global/context';


function AllMessages() {
  const { userData, api } = useGlobalContext();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await api.get(`app/user?sortBy=name`);
      if (res?.status === 200) {
        console.log('User successfully fetched: ', res?.data);
        setUsers(res?.data?.users);
        setFilteredUsers(res?.data?.users);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();


  }, [])

  useEffect(() => {
    setFilteredUsers()
  },[filter]);

  return (
    <div>
      <div className="p-2 scroll-minibar" style={{ overflow: 'auto', overflowX: 'hidden', maxHeight: '70vh', }} >
        {
          filteredUsers?.map(user => {
            return <>

              <Message key={user?.id} user={user} />
            </>
          })
        }

      </div>
    </div>
  )
}

export default AllMessages
