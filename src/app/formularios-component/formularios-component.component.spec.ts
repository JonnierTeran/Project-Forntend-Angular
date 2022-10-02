import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosComponentComponent } from './formularios-component.component';

describe('FormulariosComponentComponent', () => {
  let component: FormulariosComponentComponent;
  let fixture: ComponentFixture<FormulariosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
