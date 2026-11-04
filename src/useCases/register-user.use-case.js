import * as userRepository from '../repositories/user.repository.js';
import { UserEntity } from '../entities/user.entity.js';

export const execute = async ({ name, email, password }) => {
  const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    const error = new Error('El correo ya está registrado');
    error.status = 409; 
    throw error;
  }

  const newUser = new UserEntity({ name, email, password });
  return userRepository.create(newUser);
};