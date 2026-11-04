import * as getTaskByIdUseCase from '../useCases/get-task-by-id.use-case.js';
import * as taskRepository from '../repositories/task.repository.js'; 

export const list = async (req, res, next) => {
  try {
    const tasks = await taskRepository.findAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const task = await getTaskByIdUseCase.execute(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { title, status, project } = req.body;
    const newTask = await taskRepository.create({ title, status, project }); 
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const updatedTask = await taskRepository.update(id, req.body); 
    if (!updatedTask) {
      return res.status(404).json({ message: 'Tarea no encontrada para actualizar' });
    }
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const deleted = await taskRepository.remove(id); 
    if (!deleted) {
      return res.status(404).json({ message: 'Tarea no encontrada para eliminar' });
    }
    res.status(204).send(); 
  } catch (error) {
    next(error);
  }
};