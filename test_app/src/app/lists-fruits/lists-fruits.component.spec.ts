import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsFruitsComponent } from './lists-fruits.component';

describe('ListsFruitsComponent', () => {
  let component: ListsFruitsComponent;
  let fixture: ComponentFixture<ListsFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsFruitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
