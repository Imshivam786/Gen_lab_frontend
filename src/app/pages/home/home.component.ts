import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories: string[] = [
    'Artificial Intelligence',
    'Blockchain Technology',
    'Sustainable Energy',
    'Biomedical Engineering',
    'Quantum Computing'
  ];
  currentText: string = '';
  currentCategoryIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  cursorAnimation: any;

  ngOnInit() {
    this.typeCategory();
    this.animateCursor();
  }

  ngOnDestroy() {
    clearTimeout(this.cursorAnimation);
  }

  private typeCategory() {
    const currentCategory = this.categories[this.currentCategoryIndex];
    
    if (this.isDeleting) {
      this.currentText = currentCategory.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentCategory.substring(0, this.currentText.length + 1);
    }

    let typeSpeed = this.typingSpeed;
    
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.currentText === currentCategory) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentCategoryIndex = (this.currentCategoryIndex + 1) % this.categories.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typeCategory(), typeSpeed);
  }

  private animateCursor() {
    const cursor = document.querySelector('.typing-cursor');
    if (cursor) {
      cursor.classList.toggle('opacity-0');
      this.cursorAnimation = setTimeout(() => this.animateCursor(), 400);
    }
  }

}
