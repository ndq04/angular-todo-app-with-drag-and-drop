import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropConnectedSortingComponent } from './drag-and-drop-connected-sorting.component';

describe('DragAndDropConnectedSortingComponent', () => {
  let component: DragAndDropConnectedSortingComponent;
  let fixture: ComponentFixture<DragAndDropConnectedSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndDropConnectedSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndDropConnectedSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
