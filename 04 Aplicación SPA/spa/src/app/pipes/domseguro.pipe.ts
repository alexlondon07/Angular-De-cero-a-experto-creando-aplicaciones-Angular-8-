import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer }
from '@angular/platform-browser';

@Pipe({name: 'domseguro'})
export class DomSecuroPipe implements PipeTransform {
    
    constructor(protected sanitizer: DomSanitizer){
    }
    transform(value: string, url: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl ( url + value );
    }
}