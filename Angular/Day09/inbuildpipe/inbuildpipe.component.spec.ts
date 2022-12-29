import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuildpipeComponent } from './inbuildpipe.component';

describe('InbuildpipeComponent', () => {
  let component: InbuildpipeComponent;
  let fixture: ComponentFixture<InbuildpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuildpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuildpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
