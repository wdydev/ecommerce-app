import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as AWS from 'aws-sdk';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aws-upload',
  template: `<input type="file" (change)="uploadFile($event)" [multiple]="multiple"/>`
})
export class AwsUploadComponent implements OnInit {
  @Input() multiple?: boolean;
  @Input() folder: string;
  @Output('onupload') onUpload: EventEmitter<Array<string> | string>;

  private files: Array<string> | string;
  private s3: AWS.S3;

  constructor() {
    this.multiple = false;
    this.folder = 'images';
    this.onUpload = new EventEmitter();

    const credentials = new AWS.Credentials({
      accessKeyId: 'AKIAQQX5RXLZN6OZQI7K',
      secretAccessKey: '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'
    });
    AWS.config.update({
      region: 'us-east-2',
      credentials
    });

    const config: AWS.S3.ClientConfiguration = {
      apiVersion: 'latest',
      useDualstack: true,
      endpoint: 'https://mwa2019.us-east-2.amazonaws.com/'
    };

    this.s3 = new AWS.S3();
  }

  public uploadFile(event: any) {
    Object.values(event.target.files).map(async (file: any) => {
      const res = await this.s3
        .upload({
          ACL: 'public-read',
          Key: `${this.folder}/${file.name}`,
          Body: file,
          ContentType: 'image/jpeg',
          Bucket: 'mwa2019'
        })
        .promise();

      if (!res.Location) {
        return false;
      }

      if (!this.multiple) {
        this.files = res.Location;
        this.onUpload.emit(this.files);
        return true;
      }

      if (typeof this.files !== 'string') {
        this.files.push(res.Location);
      }
      this.onUpload.emit(this.files);
    });
  }

  public ngOnInit(): void {
    if (this.multiple) {
      this.files = [];
      return;
    }
    this.files = '';
  }
}
