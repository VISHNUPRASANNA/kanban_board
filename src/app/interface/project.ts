import { JIssue } from './issue';

export interface JProject {
  id: string;
  name: string;
  url: string;
  description: string;
  createdAt: string;
  updateAt: string;
  issues: JIssue[];
}
