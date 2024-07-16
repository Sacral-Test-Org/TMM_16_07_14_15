import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartMasterComponent } from './part-master.component';
import { PartMasterService } from '../../services/part-master.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('PartMasterComponent', () => {
  let component: PartMasterComponent;
  let fixture: ComponentFixture<PartMasterComponent>;
  let partMasterService: jasmine.SpyObj<PartMasterService>;

  beforeEach(async () => {
    const partMasterServiceSpy = jasmine.createSpyObj('PartMasterService', ['savePart', 'checkPartExists']);

    await TestBed.configureTestingModule({
      declarations: [ PartMasterComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: PartMasterService, useValue: partMasterServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartMasterComponent);
    component = fixture.componentInstance;
    partMasterService = TestBed.inject(PartMasterService) as jasmine.SpyObj<PartMasterService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldValidateFields', () => {
    component.partForm.controls['partNo'].setValue('');
    component.partForm.controls['partDesc'].setValue('');
    component.validateFields();
    expect(component.partForm.controls['partNo'].hasError('required')).toBeTruthy();
    expect(component.partForm.controls['partDesc'].hasError('required')).toBeTruthy();
  });

  it('shouldSavePartInformation', () => {
    const partData = { partNo: '123', partDesc: 'Test Part' };
    component.partForm.controls['partNo'].setValue(partData.partNo);
    component.partForm.controls['partDesc'].setValue(partData.partDesc);

    partMasterService.savePart.and.returnValue(of({ success: true }));
    component.savePartInformation();
    expect(partMasterService.savePart).toHaveBeenCalledWith(partData);
  });

  it('shouldCheckPartExists', () => {
    const partNo = '123';
    partMasterService.checkPartExists.and.returnValue(of(true));
    component.checkPartExists(partNo).subscribe(exists => {
      expect(exists).toBeTrue();
    });
    expect(partMasterService.checkPartExists).toHaveBeenCalledWith(partNo);
  });
});