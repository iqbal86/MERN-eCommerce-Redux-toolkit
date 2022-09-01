import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: 'Iqbal',
    email: 'iqbal@example.com',
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: 'Zafar',
    email: 'zafar@example.com',
    password: bcrypt.hashSync('123', 10),
  },
]

export default users
