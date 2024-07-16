import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartMasterService } from '../../services/part-master.service';
import { GLOBAL } from '../../global';

@Component({
  selector: 'app-part-master',
  templateUrl: './part-master.component.html',
  styleUrls: ['./part-master.component.css']
})
export class PartMasterComponent implements OnInit {
  partForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private partMasterService: PartMasterService) {
    this.partForm = this.fb.group({
      unitId: ['', Validators.required],
      unitName: ['', Validators.required],
      groupId: ['', Validators.required],
      groupName: ['', Validators.required],
      lineId: ['', Validators.required],
      lineDesc: ['', Validators.required],
      partId: [''],
      partNo: ['', Validators.required],
      partDesc: ['', Validators.required],
      partStatus: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validateFields(): boolean {
    if (this.partForm.invalid) {
      this.errorMessage = 'Please fill all required fields.';
      for (const control in this.partForm.controls) {
        if (this.partForm.controls[control].invalid) {
          this.partForm.controls[control].markAsTouched();
        }
      }
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  savePartInformation(): void {
    if (!this.validateFields()) {
      return;
    }

    if (GLOBAL.PARA === 0) {
      this.checkPartExists().then(exists => {
        if (!exists) {
          this.partMasterService.savePart(this.partForm.value).subscribe(
            response => {
              alert('Part information saved successfully.');
              this.resetForm();
            },
            error => {
              this.errorMessage = 'Error saving part information.';
            }
          );
        } else {
          this.errorMessage = 'The selected part number already exists for the same unit, group, and line.';
        }
      });
    } else if (GLOBAL.PARA === 1) {
      this.partMasterService.updatePart(this.partForm.value).subscribe(
        response => {
          alert('Part information updated successfully.');
          this.resetForm();
        },
        error => {
          this.errorMessage = 'Error updating part information.';
        }
      );
    }
  }

  checkPartExists(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const { unitId, groupId, lineId, partNo } = this.partForm.value;
      this.partMasterService.checkPartExists(unitId, groupId, lineId, partNo).subscribe(
        exists => {
          resolve(exists);
        },
        error => {
          this.errorMessage = 'Error checking part existence.';
          reject(error);
        }
      );
    });
  }

  resetForm(): void {
    this.partForm.reset();
    this.errorMessage = '';
  }
}
