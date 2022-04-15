import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDragAndDropComponent } from './basic-drag-and-drop.component';

describe('BasicDragAndDropComponent', () => {
  let component: BasicDragAndDropComponent;
  let fixture: ComponentFixture<BasicDragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDragAndDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
