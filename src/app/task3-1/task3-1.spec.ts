import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task31 } from './task3-1';

describe('Task31', () => {
  let component: Task31;
  let fixture: ComponentFixture<Task31>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task31],
    }).compileComponents();

    fixture = TestBed.createComponent(Task31);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
