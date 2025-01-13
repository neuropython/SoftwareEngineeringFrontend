import React, { useState, useEffect } from "react";
import room from "../../../api/chat/getRoom";
import "./UserList.css";
interface User {
  id: string;
  username: string;
}

interface UserListProps {
  roomId: string;
}

async function fetchUserData(roomId: string): Promise<User[]> {
  const response = await room(roomId);
  if (!response.ok) {
    console.error("Failed to fetch room with id:", roomId);
    return [];
  }
  const data = await response.json();
  console.log("Data:", data);
  return data.members;
}

const UserList: React.FC<UserListProps> = ({ roomId }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const members = await fetchUserData(roomId);
      setUsers(members);
      console.log("Members:", members);
    };
    getUsers();
  }, [roomId]);

  return (
    <div className="user-list-container">
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
{user.username ? user.username : "me"} (ID: {user.id})          
</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;