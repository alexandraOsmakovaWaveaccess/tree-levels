import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMenuComponent } from './main-page-menu.component';

describe('MainPageMenuComponent', () => {
  let component: MainPageMenuComponent;
  let fixture: ComponentFixture<MainPageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
