import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-token",
  templateUrl: "./token.page.html",
  styleUrls: ["./token.page.scss"]
})
export class TokenPage implements OnInit {
  qrData = "hello";
  scannedCode = null;
  elementType: "url" | "canvas" | "img" = "canvas";

  constructor(
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      },
      err => console.log("Scan Error: ", err)
    );
  }

  downloadQR() {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const imageData = canvas.toDataURL("image/jpeg").toString();

    var data = imageData.split(",")[1];

    this.base64ToGallery
      .base64ToGallery(data, { prefix: "_img", mediaScanner: true })
      .then(
        async res => {
          let toast = await this.toastCtrl.create({
            //   header: 'QR Code saved in your Photolibrary'
          });
          toast.present();
        },
        err => console.log("Error saving image to gallery ", err)
      );
  }
}
