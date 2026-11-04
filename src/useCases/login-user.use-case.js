import * as userRepository from '../repositories/user.repository.js';

export const execute = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);
  if (!user || user.password !== password) {
    const error = new Error('Credenciales no válidas');
    error.status = 401; // Unauthorized
    throw error;
  }
  // Devolvemos el usuario sin la contraseña
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};