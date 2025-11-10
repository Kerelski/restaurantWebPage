import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import {AnimateOnScroll} from 'primeng/animateonscroll';
import {TranslatePipe} from '@ngx-translate/core';
import {Card} from 'primeng/card';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';
import {Avatar} from 'primeng/avatar';
import {Rating} from 'primeng/rating';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {Checkbox} from 'primeng/checkbox';

@Component({
  selector: 'about-us-page',
  imports: [
    Footer,
    AnimateOnScroll,
    TranslatePipe,
    Card,
    Carousel,
    PrimeTemplate,
    Avatar,
    Rating,
    FormsModule,
    InputGroup,
    InputGroupAddon,
    InputText,
    Button,
    Checkbox,
    ReactiveFormsModule
  ],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
})
export class AboutUsPage {
  form!: FormGroup;
  responsiveOptions = [
    {
      breakpoint: '1000px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  opinions = [
    {id: 1, name: 'Jan Nowak', avatar: "https://restaurant-web-page.s3.eu-north-1.amazonaws.com/boy.svg", rating: 4, comment: "comment1"},
    {id: 2, name: 'Ewa Kamińska', avatar: "https://restaurant-web-page.s3.eu-north-1.amazonaws.com/girl.svg", rating: 5, comment: "comment2"},
    {id: 3, name: 'Matylda Czerwiec', avatar: "https://restaurant-web-page.s3.eu-north-1.amazonaws.com/girl.svg", rating: 5, comment: "comment3"},
    {id: 4, name: 'Piotr Węgierczyk', avatar: "https://restaurant-web-page.s3.eu-north-1.amazonaws.com/boy.svg", rating: 5, comment: "comment4"},
    {id: 5, name: 'Kamil Ślimak', avatar: "https://restaurant-web-page.s3.eu-north-1.amazonaws.com/boy.svg", rating: 4, comment: "comment5"},
    {id: 6, name: 'Teodor Malinowski', avatar: "https://restaurant-web-page.s3.eu-north-1.amazonaws.com/boy.svg", rating: 5, comment: "comment6"}
  ]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    console.log('Added to newsletter')
    this.form.reset();
  }
}
