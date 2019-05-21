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
  public address: Address;
  public form: FormGroup;
  public addresses: Array<Address>;

  constructor(private  modal: ModalService, private service: AddressService) {
    this.addresses = [];
  }

  public async addressForm(template: TemplateRef<any>, address: any = {}) {
    this.address = address;
    this.form = new FormGroup({
      address: new FormControl(this.address.address),
      address2: new FormControl(this.address.address2),
      city: new FormControl(this.address.city),
      state: new FormControl(this.address.state),
      country: new FormControl(this.address.country),
      zipcode: new FormControl(this.address.zipcode),
    });

    await this.modal.open(template);
  }

  public async saveAddress() {
    const address = await this.service.saveAddress({_id: this.address._id, ...this.form.value});

    // refresh our list
    if (this.address._id) {
      this.addresses = this.addresses.map(addr => {
        if (addr._id === this.address._id) {
          return address;
        }
        return addr;
      });
      this.cancel();
      return;
    }

    this.addresses.push(address);

    this.cancel();
  }

  public async deleteAddress(address: Address) {
    const res = await this.service.deleteAddress(address._id);
    if (res === true) {
      this.addresses = this.addresses.filter(addr => addr._id !== address._id);
    }
  }

  public cancel(): void {
    this.modal.close();
  }

  public async loadAddresses() {
    this.addresses = await this.service.getAddresses();
  }

  public ngOnInit(): void {
    this.loadAddresses();
  }

}
