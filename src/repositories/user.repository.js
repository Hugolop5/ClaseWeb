import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.resolve('src/data/users.json');

const readUsers = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeUsers = async (users) => {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');
};

export const findByEmail = async (email) => {
  const users = await readUsers();
  return users.find(user => user.email === email);
};

export const create = async (userData) => {
  const users = await readUsers();
  const newUser = { ...userData };
  users.push(newUser);
  await writeUsers(users);
  return newUser;
};