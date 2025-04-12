import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  theme: 'light' | 'dark' | 'auto' = 'auto';

  ngOnInit(): void {
    // Cargar la preferencia del usuario desde localStorage
    const savedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | 'auto';
    this.theme = savedTheme || 'auto';
    this.applyTheme();
  }

  setTheme(theme: string): void {
    this.theme = theme as 'light' | 'dark' | 'auto';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  private applyTheme(): void {
    const htmlElement = document.documentElement;

    // Eliminar clases existentes
    htmlElement.classList.remove('dark');
    htmlElement.classList.remove('light');

    if (this.theme === 'dark') {
      htmlElement.classList.add('dark');
    } else if (this.theme === 'light') {
      htmlElement.classList.add('light');
    } else if (this.theme === 'auto') {
      // Detectar preferencia del sistema operativo
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDark) {
        htmlElement.classList.add('dark');
      }
    }
  }
}
