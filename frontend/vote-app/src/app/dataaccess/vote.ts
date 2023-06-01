import { Election } from './election';
import { Person } from './person';

export class Vote {
  public id!: number;
  public election = new Election();
  public person = new Person();
  public votedFor = VotedFor;
}

enum VotedFor {
  A,
  B,
}
