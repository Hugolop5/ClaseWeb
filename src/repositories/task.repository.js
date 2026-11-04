let tasks = [
  { id: 1, title: 'Diseñar base de datos', status: 'TODO', project: 'TaskFlow' },
  { id: 2, title: 'Configurar Express', status: 'DONE', project: 'TaskFlow' }
];

export const findAll = async () => {
  return tasks;
};

export const findById = async (id) => {
  const numericId = Number(id);
  return tasks.find(task => task.id === numericId);
};

export const create = async (taskData) => {
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    ...taskData
  };
  tasks.push(newTask);
  return newTask;
};

export const update = async (id, taskData) => {
  const numericId = Number(id);
  const index = tasks.findIndex(task => task.id === numericId);
  if (index === -1) return null;

  tasks[index] = {
    id: numericId,
    title: taskData.title !== undefined ? taskData.title : tasks[index].title,
    status: taskData.status !== undefined ? taskData.status : tasks[index].status,
    project: taskData.project !== undefined ? taskData.project : tasks[index].project
  };

  return tasks[index];
};

export const remove = async (id) => {
  const numericId = Number(id);
  const index = tasks.findIndex(task => task.id === numericId);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};