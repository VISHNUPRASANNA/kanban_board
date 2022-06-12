export enum IssueStatus {
  OPEN = 'Open',
  CONTACTED = 'Contacted',
  WRITTEN_TEST = 'Written test',
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

export interface JIssue {
  id: string;
  title: string;
  status: IssueStatus;
  listPosition: number;
  description: string;
}
