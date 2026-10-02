import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task22 } from './task2-2';

describe('Task22', () => {
  let component: Task22;
  let fixture: ComponentFixture<Task22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task22],
    }).compileComponents();

    fixture = TestBed.createComponent(Task22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
