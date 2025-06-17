import React, { useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Users</h2>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-2 space-x-2">
                <CgProfile className="text-2xl text-blue-500" />
                <h4 className="text-lg font-semibold">
                  {user.firstName} {user.lastName}
                </h4>
              </div>
              <p className="text-sm text-gray-500 mb-1">ID: {user.id}</p>
              <p className="flex items-center text-sm mb-1">
                <AiOutlineMail className="mr-2" /> {user.email}
              </p>
              <p className="flex items-center text-sm mb-1">
                <AiOutlinePhone className="mr-2" /> {user.phone}
              </p>
              <p className="text-sm text-gray-400">
                Age: {user.age}, Gender: {user.gender}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}