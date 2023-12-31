import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  public mensagem: string;
  public valor: number;
  public link_foto: string;
  public textoForm: string;
  public senha: string = "";
  public clicado: boolean;

  public constructor(){
    this.mensagem = "Olá Mundo";
    this.valor = 0;
    this.link_foto = "/assets/ISIFLIX.png";
    this.textoForm = "";
    this.clicado = true;

  }

  ngOnInit(): void {
    console.log("NgOnInit chamado...");
  }

  public mudarValor() {
    this.valor ++ ;
    this.link_foto = "/assets/isidro.jpeg";
    // console.log(this.valor)
  }

  public enviarDados() {
    console.log(this.textoForm + "/" + this.senha + "/" + this.clicado);

  }

}
