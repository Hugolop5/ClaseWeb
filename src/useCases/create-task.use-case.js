import * as taskRepository from '../repositories/task.repository.js';
import { TaskEntity } from '../entities/task.entity.js';

export const execute = async (taskData) => {
  const newTask = new TaskEntity(taskData);
  return taskRepository.create(newTask);
};