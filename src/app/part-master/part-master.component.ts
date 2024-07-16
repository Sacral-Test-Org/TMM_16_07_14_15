import { Component, OnInit } from '@angular/core';
import { PartMasterService } from './part-master.service';
import { PartMasterLovService } from './part-master-lov.service';
import { UnitValidationService } from '../unit-validation/unit-validation.service';
import { GroupValidationService } from '../group-validation/group-validation.service';
import { LineValidationService } from '../line-validation/line-validation.service';

@Component({
  selector: 'app-part-master',
  templateUrl: './part-master.component.html',
  styleUrls: ['./part-master.component.css']
})
export class PartMasterComponent implements OnInit {
  globalParameter: number;
  partId: string;
  partNumber: string;
  partDescription: string;
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDescription: string;
  saveButtonEnabled: boolean;

  constructor(
    private partMasterService: PartMasterService,
    private partMasterLovService: PartMasterLovService,
    private unitValidationService: UnitValidationService,
    private groupValidationService: GroupValidationService,
    private lineValidationService: LineValidationService
  ) {}

  ngOnInit(): void {
    // Initialize component
  }

  onPartNumberDoubleClick(): void {
    if (this.globalParameter === 0) {
      this.partMasterLovService.showPartNoLov();
    } else if (this.globalParameter === 1) {
      this.partMasterLovService.showEditPartNoLov();
    }
    if (this.partNumber) {
      this.moveToPartDescriptionField();
    }
  }

  onPartNumberClick(): void {
    this.saveButtonEnabled = false;
    this.partId = '';
    this.partNumber = '';
    this.partDescription = '';
    this.moveToPartNumberField();
  }

  onPartNumberNextItem(): void {
    if (!this.unitId || !this.unitName || !this.groupId || !this.groupName || !this.lineId || !this.lineDescription) {
      this.showMessage('Please fill all required fields.');
      return;
    }
    if (this.globalParameter === 0 && !this.partNumber) {
      this.showMessage('Part number is required.');
      return;
    }
    if (this.globalParameter === 1 && !this.partId) {
      this.showMessage('Part ID is required.');
      return;
    }
    this.moveToPartDescriptionField();
  }

  validatePartNumber(): void {
    if (this.partNumber) {
      this.partMasterService.validatePartNumber(this.partNumber, this.globalParameter).subscribe(
        (response) => {
          if (!response.valid) {
            this.showMessage('Part number not found.');
            this.raiseValidationError();
          }
        },
        (error) => {
          this.showMessage('Error validating part number.');
        }
      );
    }
  }

  private moveToPartDescriptionField(): void {
    // Logic to move cursor to part description field
  }

  private moveToPartNumberField(): void {
    // Logic to move cursor to part number field
  }

  private showMessage(message: string): void {
    // Logic to display message to the user
  }

  private raiseValidationError(): void {
    // Logic to raise validation error
  }
}
