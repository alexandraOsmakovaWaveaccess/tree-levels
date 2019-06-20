import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlololComponent } from './ololol.component';

describe('OlololComponent', () => {
  let component: OlololComponent;
  let fixture: ComponentFixture<OlololComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlololComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlololComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
