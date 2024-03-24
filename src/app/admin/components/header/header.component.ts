import { Component } from '@angular/core';
import { NavControllService } from '../../services/nav-controll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private navCtrl:NavControllService) {}

  public navController:boolean = false;
  controllNav() {
  
      this.navController = !this.navController;
      
      this.navCtrl.navControllDesk.next(this.navController);
 

    
  }

}
