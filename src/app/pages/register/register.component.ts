import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

export function matchPasswordValidator(passwordKey : string, confirmPasswordKey : string) : ValidatorFn{
  return (control : AbstractControl) : {[key : string] : any} | null => {

    const password = control.get(passwordKey)?.value;
    const confirmPassword = control.get(confirmPasswordKey)?.value;
    return password === confirmPassword ? null : {passwordMismatch : true};
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  
  public listaComunas: string[] = ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura"];

  constructor(private router : Router, private fb : FormBuilder, private accountService : AccountService) { }

  registerForm = this.fb.group({
    email : new FormControl('', [Validators.required,Validators.email]),
    password : new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$')]),
    confirmPassword : new FormControl(''),
    rut : new FormControl('', [Validators.required, Validators.pattern('^[0-9]+-[0-9kK]{1}$')]),
    nombres : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    apellidos : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    fechaNacimiento : new FormControl('', [Validators.required]),
    ocupacion : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    comunaTrabajo : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    comunaResidencia : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
  },
  {
    validator : matchPasswordValidator('password', 'confirmPassword'),
  })

  ngOnInit() {}


  backToLogin(){
    this.router.navigate(["/"]);
  }

  submitForm(){
    console.log("Submit");
    this.accountService.register(this.registerForm.value);
  }

}
