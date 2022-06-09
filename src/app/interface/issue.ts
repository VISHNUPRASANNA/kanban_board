import { JComment } from './comment';

/* eslint-disable no-shadow */
export enum IssueType {
  SELECTED = 'Selected',
  INIT = 'Initial Stage',
  NOTSELECTED = 'Not Selected'
}

export enum IssueStatus {
  OPEN = 'Open',
  CONTACTED = 'Contacted',
  WRITTEN_TEST = 'Written test',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  TECHNICAL = 'Technical round',
  CULTURE_FIT = 'Culture fit round'
}

export const IssueStatusDisplay = {
  [IssueStatus.OPEN]: 'Open',
  [IssueStatus.CONTACTED]: 'Contacted',
  [IssueStatus.WRITTEN_TEST]: 'Written test',
  [IssueStatus.TECHNICAL]: 'Technical round',
  [IssueStatus.CULTURE_FIT]: 'Culture fit round'
};

export enum IssuePriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest'
}

export const IssuePriorityColors = {
  [IssuePriority.HIGHEST]: '#CD1317',
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
  [IssuePriority.LOWEST]: '#57A55A'
};
export interface JIssue {
  id: string;
  title: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  listPosition: number;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  createdAt: string;
  updatedAt: string;
  reporterId: string;
  userIds: string[];
  comments: JComment[];
  projectId: string;
}
/* eslint-enable no-shadow */
