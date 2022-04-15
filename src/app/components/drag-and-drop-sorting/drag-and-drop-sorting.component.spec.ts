import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropSortingComponent } from './drag-and-drop-sorting.component';

describe('DragAndDropSortingComponent', () => {
  let component: DragAndDropSortingComponent;
  let fixture: ComponentFixture<DragAndDropSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
