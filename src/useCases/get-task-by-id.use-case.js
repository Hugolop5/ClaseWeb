import * as taskRepository from '../repositories/task.repository.js';

export const execute = async (id) => {
  return taskRepository.findById(id);
};