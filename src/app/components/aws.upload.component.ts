import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as AWS from 'aws-sdk';
import {environment} from '../../environments/environment';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aws-upload',
  template: `<input type="file" (change)="uploadFile($event)" [multiple]="multiple"/>`
})
export class AwsUploadComponent implements OnInit {
  @Input() multiple?: boolean;
  @Input() folder: string;
  @Output('onupload') onUpload: EventEmitter<Array<string> | string>;

  public files: Array<string> | string;
  public s3: AWS.S3;

  constructor() {
    this.multiple = false;
    this.folder = environment.awsFolder;
    this.onUpload = new EventEmitter();

    const credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.awsPoolId,
    });

    AWS.config.update({
      region: environment.awsRegion,
      credentials
    });

    const config: AWS.S3.ClientConfiguration = {
      apiVersion: 'latest',
      useDualstack: true,
      endpoint: environment.awsEndpoint
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
          Bucket: environment.awsBucket
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
