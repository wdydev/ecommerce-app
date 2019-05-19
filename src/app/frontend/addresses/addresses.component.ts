import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalService} from '../../services/modal.service';
import {AddressService} from './address.service';
import {Address} from '../../entity/address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html'
})
export class AddressesComponent implements OnInit {
  private address: Address;
  private form: FormGroup;
  private addresses: Array<Address>;

  constructor(private  modal: ModalService, private service: AddressService) {
    this.addresses = [];
  }

  public async addressForm(template: TemplateRef<any>, address: any = {}) {
    this.address = address;
    this.form = new FormGroup({
      name: new FormControl(),
      parent: new FormControl(),
      description: new FormControl(),
    });
    const res = await this.modal.open(template);
  }

  public cancel(): void {
    this.modal.close();
  }

  public ngOnInit(): void {
    //  this.loadCategories();
  }
}

