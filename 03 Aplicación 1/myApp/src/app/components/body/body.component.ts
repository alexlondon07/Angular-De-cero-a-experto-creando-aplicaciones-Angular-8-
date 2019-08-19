import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    mostrar:boolean = true;

    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidads',
        autor: 'Ben Parker'
    }

    personajes: string[] = ['Spiderman', 'Venom', 'Dr Octopus'];

}