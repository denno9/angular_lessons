import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiesDetailsComponent } from './recepies-details.component';

describe('RecepiesDetailsComponent', () => {
  let component: RecepiesDetailsComponent;
  let fixture: ComponentFixture<RecepiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
