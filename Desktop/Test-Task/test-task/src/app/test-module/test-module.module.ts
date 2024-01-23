import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import {TuiCarouselModule, TuiIslandModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TestComponentComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TuiCarouselModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiIslandModule,
    
  ]
})
export class TestModuleModule { }
