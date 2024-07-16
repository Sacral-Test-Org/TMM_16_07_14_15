import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartMasterComponent } from './part-master.component';
import { By } from '@angular/platform-browser';

describe('PartMasterComponent', () => {
  let component: PartMasterComponent;
  let fixture: ComponentFixture<PartMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onClear when Clear button is clicked', () => {
    spyOn(component, 'onClear');
    const clearButton = fixture.debugElement.query(By.css('button.clear-button'));
    clearButton.triggerEventHandler('click', null);
    expect(component.onClear).toHaveBeenCalled();
  });
});