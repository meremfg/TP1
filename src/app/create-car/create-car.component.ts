import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICar } from 'src/models/icar/icar';
import { CarService } from 'src/services/car/car.service';
@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {
  Marque: AbstractControl;
  NumeroImmatriculation: AbstractControl;
  NumberSiege: AbstractControl;
  Tickets:AbstractControl; 
  Couleur:AbstractControl;
  carForm: FormGroup;

  cars: ICar[] = [];

  constructor(private formBuilder: FormBuilder , private carservice : CarService) { 
    this.carForm = this.formBuilder.group({
      Marque: ['', [Validators.required]],
      NumeroImmatriculation: ['', [Validators.required]],
      NumberSiege: ['',[Validators.required]],
      Tickets: ['', [Validators.required]]
    });
    

    this.Marque = this.carForm.controls.Marque;
    this.NumeroImmatriculation = this.carForm.controls.NumeroImmatriculation;
    this.NumberSiege = this.carForm.controls.NumberSiege;
    this.Tickets = this.carForm.controls.Tickets;
    this.Couleur=this.carForm.controls.Couleur;
  }
    

  }

  ngOnInit(): void {
  }

}
