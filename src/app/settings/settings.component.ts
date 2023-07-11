import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  lightMode: boolean = true;

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phoneNumber: string = "";
  language: string = "";
  occupation: string = "";

  occupations = [
    { text: 'Frontend Developer', value: 'frontend' },
    { text: 'Backend Developer', value: "backend" },
    { text: 'Designer', value: "design" },
    { text: 'Devops Engineer', value: "devops" },
  ];

  languages = [
    { text: 'English', value: 'en' },
    { text: 'French', value: "fr" },
    { text: 'Spanish', value: "sp" },
    { text: 'Yoruba', value: "yr" },
    { text: 'Igbo', value: "ig" },
    { text: 'Hausa', value: "hs" },
  ];
  onSubmit() {

  }
}
