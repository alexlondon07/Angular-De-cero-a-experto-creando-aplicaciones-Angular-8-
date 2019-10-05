import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PasswordPipe'
})
export class PasswordPipePipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if(activar){
      let salida:string = "";
      for (let i = 0; i < value.length; i++) {
        salida +="*";
      }
      return salida
    }else{
      return value;
    }
  }
}
