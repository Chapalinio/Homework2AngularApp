import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordHeshing',
})
export class PasswordHeshingPipe implements PipeTransform {
  transform(value: string): string {
    let heshedPassword = ""
    let containsOnlyLetters = true

    const alphabet: string[] = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    for(let i = 0; i < value.length; i++){
      if(!containsOnlyLetters){
        return "PasswordHeshingPipe | ERROR : invalin password format (forbiden everything exept of english letters)"
      }
      if(!alphabet.includes(value[i])){
        containsOnlyLetters = false
      }
    }

    for(let i = 0; i < value.length; i++){
      switch(value[i]){
        case 'x': heshedPassword += 'a'; break;
        case 'y': heshedPassword += 'b'; break;
        case 'z': heshedPassword += 'c'; break;
        default: heshedPassword += alphabet[alphabet.indexOf(value[i]) + 3]
      }
    }

    return heshedPassword
  }
}
