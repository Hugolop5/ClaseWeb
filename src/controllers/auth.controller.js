import * as registerUseCase from '../useCases/register-user.use-case.js';
import * as loginUseCase from '../useCases/login-user.use-case.js';
import * as logoutUseCase from '../useCases/logout-user.use-case.js';

export const register = async (req, res, next) => {
  try {
    const user = await registerUseCase.execute(req.body);
    // Ocultar contraseña en la respuesta
    const { password, ...userResponse } = user;
    res.status(201).json(userResponse);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await loginUseCase.execute(req.body);
    res.status(200).json({ message: 'Login exitoso', user });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    const result = await logoutUseCase.execute();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};