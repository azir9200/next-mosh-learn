import React from 'react'

interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store'
  })
  const users: User[] = await res.json();

  return (
    <div>
      <h1> Azir User page </h1>
      <p> {new Date().toLocaleDateString()} </p>
      <p>{new Date().toLocaleTimeString()} </p>
      <ul>
        {
          users.map(user => <li key={user.id}>
            <h3>Name of Users :   {user.name}</h3>
          </li>)
        }
      </ul>

    </div>
  )
}

export default UsersPage 