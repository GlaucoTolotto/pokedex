import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokebola8BitsComponent } from './pokebola8-bits.component';

describe('Pokebola8BitsComponent', () => {
  let component: Pokebola8BitsComponent;
  let fixture: ComponentFixture<Pokebola8BitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokebola8BitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokebola8BitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
