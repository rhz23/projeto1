import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rotacustom',
  templateUrl: './rotacustom.component.html',
  styleUrls: ['./rotacustom.component.css']
})
export class RotacustomComponent implements OnInit {

  public idRecebido: string = "";
  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.idRecebido = this.activatedRoute.snapshot.params['id'];
    console.log("Id recebido na rota = " + this.idRecebido);
  }

  public navegar(): void {
    this.router.navigate(['/']);
  }


}
