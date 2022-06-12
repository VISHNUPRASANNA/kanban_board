import { JIssue } from './issue';

export interface JProject {
  id: string;
  name: string;
  description: string;
  issues: JIssue[];
}
