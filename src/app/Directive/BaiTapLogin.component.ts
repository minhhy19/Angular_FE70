import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-login',
    template: `
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a class="navbar-brand" href="#">CYBERSOFT</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" *ngIf="!isLogin">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#modelId">
                            Login
                        </a>
                    </li>
                    <li class="nav-item" *ngIf="isLogin">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#modelId">
                            Hello {{name}}
                        </a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="form-group">
                                <p>User name</p>
                                <input type="text" #usName class="form-control">
                            </div>
                            <div class="form-group">
                                <p>Password</p>
                                <input type="password" #password class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closeForm">Close</button>
                        <button type="button" class="btn btn-primary" (click)="handleLogin(usName.value, password.value)">Login</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class BaiTapLoginComponent implements OnInit {
    name: string = '';
    isLogin: boolean = false;
    handleLogin(usName: string, pass: string):void {
        if(usName === 'hy' && pass === 'hy') {
            this.name = usName;
            this.isLogin = true;
            (<HTMLElement> document.querySelector('#closeForm')).click();
        }
    }

    constructor() { }

    ngOnInit() { }
}