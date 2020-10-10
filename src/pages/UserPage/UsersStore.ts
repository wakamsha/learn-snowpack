import { action, computed, makeObservable, observable } from 'mobx';
import { createContext } from 'react';
import { requestGetUser, requestGetUsers, requestPostUser } from '../../infra/client';
import { User } from '../../infra/model';

export class UsersStore {
  public static Context = createContext<UsersStore | null>(null);

  public users: User[] = [];

  public userId = 0;

  public name = '';

  public job = '';

  constructor() {
    makeObservable(this, {
      users: observable,
      userId: observable,
      name: observable,
      job: observable,
      numOfUser: computed,
      setUserId: action,
      setName: action,
      setJob: action,
      setUsers: action,
    });
  }

  public setUserId(userId: number) {
    this.userId = userId;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setJob(job: string) {
    this.job = job;
  }

  public setUsers(users: User[]) {
    this.users = users;
  }

  public get numOfUser(): number {
    return this.users.length;
  }

  public async getAllUsers() {
    const users = await requestGetUsers();
    this.setUsers(users);
  }

  public async getUser() {
    const user = await requestGetUser({
      path: this.userId ? `${this.userId}` : '',
    });
    this.setUsers([user]);
  }

  public async postUser() {
    const user = await requestPostUser({
      send: {
        name: this.name,
        job: this.job,
      },
    });
    this.setUsers(([user] as unknown) as User[]);
  }
}
