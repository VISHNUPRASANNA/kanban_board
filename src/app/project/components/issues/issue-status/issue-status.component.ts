import { Component, Input, OnInit } from '@angular/core';
import { IssueStatus, IssueStatusDisplay, JIssue } from '@trungk18/interface/issue';
import { ProjectService } from '@trungk18/project/state/project/project.service';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';

@Component({
  selector: 'issue-status',
  templateUrl: './issue-status.component.html',
  styleUrls: ['./issue-status.component.scss']
})
export class IssueStatusComponent implements OnInit {
  @Input() issue: JIssue;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IssueStatusDisplay = IssueStatusDisplay;

  variants = {
    [IssueStatus.OPEN]: 'btn-secondary',
    [IssueStatus.CONTACTED]: 'btn-secondary',
    [IssueStatus.WRITTEN_TEST]: 'btn-secondary',
    [IssueStatus.TECHNICAL]: 'btn-primary',
    [IssueStatus.CULTURE_FIT]: 'btn-success'
  };

  issueStatuses: IssueStatusValueTitle[];

  constructor(private _projectService: ProjectService, private _projectQuery: ProjectQuery) {}

  ngOnInit(): void {
    this.issueStatuses = [
      new IssueStatusValueTitle(IssueStatus.OPEN),
      new IssueStatusValueTitle(IssueStatus.CONTACTED),
      new IssueStatusValueTitle(IssueStatus.WRITTEN_TEST),
      new IssueStatusValueTitle(IssueStatus.TECHNICAL),
      new IssueStatusValueTitle(IssueStatus.CULTURE_FIT)
    ];
  }

  updateIssue(status: IssueStatus) {
    const newPosition = this._projectQuery.lastIssuePosition(status);
    this._projectService.updateIssue({
      ...this.issue,
      status,
      listPosition: newPosition + 1
    });
  }

  isStatusSelected(status: IssueStatus) {
    return this.issue.status === status;
  }
}

class IssueStatusValueTitle {
  value: IssueStatus;
  label: string;
  constructor(issueStatus: IssueStatus) {
    this.value = issueStatus;
    this.label = IssueStatusDisplay[issueStatus];
  }
}
