import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  standalone: false,
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {
  isHidden = false;
  private lastScrollPosition = 0;
  private readonly SCROLL_THRESHOLD = 10; // Adjust sensitivity (px)

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    
    // Hide if scrolling down past threshold
    if (currentScrollPos > this.lastScrollPosition && currentScrollPos > this.SCROLL_THRESHOLD) {
      this.isHidden = true;
    } 
    // Show if scrolling up
    else if (currentScrollPos < this.lastScrollPosition) {
      this.isHidden = false;
    }

    this.lastScrollPosition = currentScrollPos;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }
}
