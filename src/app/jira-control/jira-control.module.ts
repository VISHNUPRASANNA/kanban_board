import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

const JiraControlComponents = [
  SvgDefinitionsComponent,
  SvgIconComponent,
  ButtonComponent,
  InputComponent
];
@NgModule({
  declarations: JiraControlComponents,
  exports: JiraControlComponents,
  imports: [CommonModule, ReactiveFormsModule]
})
export class JiraControlModule {}
