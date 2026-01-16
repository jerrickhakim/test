// Test JavaScript file for AST parsing

export const TEST_CONSTANT = 'testing';

export function greetUser(name) {
  return `Hello, ${name}!`;
}

export async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

export class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}

const internalHelper = () => {
  console.log('Internal function');
};
