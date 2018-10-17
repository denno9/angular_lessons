import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipiesItemComponent } from './receipies-item.component';

describe('ReceipiesItemComponent', () => {
  let component: ReceipiesItemComponent;
  let fixture: ComponentFixture<ReceipiesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipiesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
