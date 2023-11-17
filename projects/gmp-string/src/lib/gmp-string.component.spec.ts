import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpStringComponent } from './gmp-string.component';

describe('GmpStringComponent', () => {
  let component: GmpStringComponent;
  let fixture: ComponentFixture<GmpStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
