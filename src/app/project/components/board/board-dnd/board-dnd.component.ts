import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IssueStatus } from '@trungk18/interface/issue';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';
@UntilDestroy()
@Component({
  selector: 'board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent {
  issueStatuses: IssueStatus[] = [
    IssueStatus.OPEN,
    IssueStatus.CONTACTED,
    IssueStatus.WRITTEN_TEST,
    IssueStatus.TECHNICAL,
    IssueStatus.CULTURE_FIT
  ];

  constructor(public projectQuery: ProjectQuery) {}
}
