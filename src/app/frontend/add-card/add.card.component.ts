import {
  StripeService,
  ElementOptions,
  Elements,
  Element as StripeElement,
  ElementsOptions
} from 'ngx-stripe';
import {AfterViewChecked, Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {AddCardService} from './add.card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add.card.html'
})
export class AddCardComponent implements OnInit {
  public stripeElements: Elements;
  public stripeCard: StripeElement;
  public cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        fontSize: '16px',
        color: '#222',
      }
    }
  };
  public elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  @ViewChild('add_card') addCardTemplate: TemplateRef<any>;
  @Output('oncomplete') onComplete: EventEmitter<boolean>;

  constructor(private stripeService: StripeService, private modal: ModalService, private  service: AddCardService) {
    this.onComplete = new EventEmitter();
  }

  public addCreditCard() {
    this.modal.open(this.addCardTemplate);
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.stripeElements = elements;
        if (!this.stripeCard) {
          this.stripeCard = this.stripeElements.create('card', this.cardOptions);
          this.stripeCard.mount('#card-element');
        }
      });
  }

  public async saveCard() {
    this.stripeService
      .createToken(this.stripeCard, undefined)
      .subscribe(async (result) => {
        if (result.error) {
          console.log(result.error);
          return false;
        }

        const res = await this.service.saveCard(result.token);
        this.modal.close();
        this.onComplete.emit(res);
      });
  }
 
  public ngOnInit(): void {
    this.addCreditCard();
  }
}
