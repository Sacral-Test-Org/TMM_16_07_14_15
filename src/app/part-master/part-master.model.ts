export class Part {
  private _partId: number;
  private _partNumber: string;
  private _partDescription: string;
  private _partStatus: string;
  private _unitId: number;
  private _unitName: string;
  private _groupId: number;
  private _groupName: string;
  private _lineId: number;
  private _lineDescription: string;

  constructor(
    partId: number,
    partNumber: string,
    partDescription: string,
    partStatus: string,
    unitId: number,
    unitName: string,
    groupId: number,
    groupName: string,
    lineId: number,
    lineDescription: string
  ) {
    this._partId = partId;
    this._partNumber = partNumber;
    this._partDescription = partDescription;
    this._partStatus = partStatus;
    this._unitId = unitId;
    this._unitName = unitName;
    this._groupId = groupId;
    this._groupName = groupName;
    this._lineId = lineId;
    this._lineDescription = lineDescription;
  }

  // Getters and Setters
  get partId(): number {
    return this._partId;
  }

  set partId(value: number) {
    this._partId = value;
  }

  get partNumber(): string {
    return this._partNumber;
  }

  set partNumber(value: string) {
    this._partNumber = value;
  }

  get partDescription(): string {
    return this._partDescription;
  }

  set partDescription(value: string) {
    this._partDescription = value;
  }

  get partStatus(): string {
    return this._partStatus;
  }

  set partStatus(value: string) {
    this._partStatus = value;
  }

  get unitId(): number {
    return this._unitId;
  }

  set unitId(value: number) {
    this._unitId = value;
  }

  get unitName(): string {
    return this._unitName;
  }

  set unitName(value: string) {
    this._unitName = value;
  }

  get groupId(): number {
    return this._groupId;
  }

  set groupId(value: number) {
    this._groupId = value;
  }

  get groupName(): string {
    return this._groupName;
  }

  set groupName(value: string) {
    this._groupName = value;
  }

  get lineId(): number {
    return this._lineId;
  }

  set lineId(value: number) {
    this._lineId = value;
  }

  get lineDescription(): string {
    return this._lineDescription;
  }

  set lineDescription(value: string) {
    this._lineDescription = value;
  }
}
