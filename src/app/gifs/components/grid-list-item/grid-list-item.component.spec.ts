import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListItemComponent } from './grid-list-item.component';

describe('GridListItemComponent', () => {
  let component: GridListItemComponent;
  let fixture: ComponentFixture<GridListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
