import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    standalone: false
})
export class NavBarComponent implements OnInit {
    is_mobile_menu_open: boolean = false;
    is_user_menu_open: boolean = false;
    userInitial: string = 'U';

    ngOnInit(){

    }

    toggle_mobile_menu(){
        this.is_mobile_menu_open = !this.is_mobile_menu_open;
    }

    toggle_user_menu(){
        this.is_user_menu_open = !this.is_user_menu_open;
    }
}
