import { Injectable } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(public NbThemeService:NbThemeService) { }

  setTheme(){
    const current = localStorage.getItem('theme') || 'default';
    const next = current === 'dark' ? 'default' : 'dark';
    this.NbThemeService.changeTheme(next);
    localStorage.setItem('theme',next);
  }

  themeState(){
    const getTheme = localStorage.getItem('theme') || 'default';
    this.NbThemeService.changeTheme('dark');
  }

}
