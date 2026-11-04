export class TaskEntity {
  constructor({ id, title, status, project }) {
    this.id = id || Date.now(); 
    this.title = title;
    this.status = status;
    this.project = project || 'TaskFlow';
  }
}