import {Injectable, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Injectable({providedIn: 'root'})
export class ModalService {
  private instance: BsModalRef;

  constructor(private service: BsModalService) {
  }

  public open(template: TemplateRef<any>): BsModalRef {
    this.instance = this.service.show(template);
    return this.instance;
  }

  public close() {
    this.instance.hide();
  }
}
