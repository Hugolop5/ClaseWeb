export class UserEntity {
  constructor({ id, name, email, password, createdAt, isActive }) {
    this.id = id || Date.now().toString();
    this.name = name;
    this.email = email;
    this.password = password; 
    this.createdAt = createdAt || new Date().toISOString();
    this.isActive = isActive !== undefined ? isActive : true;
  }
}