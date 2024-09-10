import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemobootstrapComponent } from './demobootstrap.component';

describe('DemobootstrapComponent', () => {
  let component: DemobootstrapComponent;
  let fixture: ComponentFixture<DemobootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemobootstrapComponent]
    });
    fixture = TestBed.createComponent(DemobootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
