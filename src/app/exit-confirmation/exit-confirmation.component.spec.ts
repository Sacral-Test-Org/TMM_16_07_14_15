import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExitConfirmationComponent } from './exit-confirmation.component';
import { By } from '@angular/platform-browser';

describe('ExitConfirmationComponent', () => {
  let component: ExitConfirmationComponent;
  let fixture: ComponentFixture<ExitConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onConfirm when Yes button is clicked', () => {
    spyOn(component, 'onConfirm');
    const yesButton = fixture.debugElement.query(By.css('.yes-button'));
    yesButton.triggerEventHandler('click', null);
    expect(component.onConfirm).toHaveBeenCalled();
  });

  it('should call onCancel when No button is clicked', () => {
    spyOn(component, 'onCancel');
    const noButton = fixture.debugElement.query(By.css('.no-button'));
    noButton.triggerEventHandler('click', null);
    expect(component.onCancel).toHaveBeenCalled();
  });
});