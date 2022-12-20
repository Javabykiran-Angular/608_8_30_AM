import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterpolationComponent } from './stringinterpolation.component';

describe('StringinterpolationComponent', () => {
  let component: StringinterpolationComponent;
  let fixture: ComponentFixture<StringinterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringinterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
