import {
  Component,
  VERSION,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { BarcodeFormat, Result } from '@zxing/library';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo | undefined;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.PDF_417,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION,
  ];

  hasDevices!: boolean;
  hasPermission!: boolean;

  qrResultString!: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  constructor(private readonly _dialog: MatDialog) {}
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // this.scanner.refreshCodeReader();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  clearResult(): void {
    this.qrResultString = '';
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: any) {
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selected: any) {
    const device = this.availableDevices.find((x) => x.deviceId === selected);
    this.currentDevice = device;
  }

  // openFormatsDialog() {
  //   const data = {
  //     formatsEnabled: this.formatsEnabled,
  //   };

  //   this._dialog
  //     .open(FormatsDialogComponent, { data })
  //     .afterClosed()
  //     .subscribe(x => { if (x) { this.formatsEnabled = x; } });
  // }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  // openInfoDialog() {
  //   const data = {
  //     hasDevices: this.hasDevices,
  //     hasPermission: this.hasPermission,
  //   };

  //   this._dialog.open(AppInfoDialogComponent, { data });
  // }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }
}
