import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({providedIn:"root"})
export class BaseForm {
    
    constructor(){

    }

    isValidField(form: AbstractControl|null){
        var flag = false;
        if (form != null) {
            flag = form.touched || form.dirty && !form.valid;
        }
        return flag;
    }

    getErrorMessage(form: AbstractControl|null){
        let message = "";
        if (form){
            const {errors} = form;
            if (errors) {
                const messages: any = {
                    required: 'Campo requerido',
                    email: 'Correo inválido',
                    pattern: 'Formato inválido',
                    minError: 'El rango no es correcto',
                    min: 'El mínimo de caracteres es 8',
                    max: 'Sobrepasa el maxímo de caracteres'
                }

                const errorKey = Object.keys(errors).find(Boolean);
                if (errorKey) {
                    message = messages[errorKey];
                }
            }
        }
        return message;
    }
}