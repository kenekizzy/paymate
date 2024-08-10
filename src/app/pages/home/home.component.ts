import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ApproachComponent } from '../../components/approach/approach.component';
import { GetStartedComponent } from '../../components/get-started/get-started.component';
import { PaymentComponent } from '../../components/payment/payment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeroComponent, ApproachComponent, GetStartedComponent, PaymentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
