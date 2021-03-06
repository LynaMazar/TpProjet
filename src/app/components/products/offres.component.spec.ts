import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresComponent } from './offres.component';

describe('ProductsComponent', () => {
  let component: OffresComponent;
  let fixture: ComponentFixture<OffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
