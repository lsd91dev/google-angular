import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  apiKey = 'AIzaSyC_NIKjKolsYLYHU843nS9G8II64w6loDw';

  async ngAfterViewInit(){
    await this.initScript();
  }

  async initScript(){
    return new Promise<void>((resolve, reject) => {
      const script = window.document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=drawing,places&callback=mapInit`;
      script.onerror = reject;
      document.head.appendChild(script);
      (window as any).mapInit = () => {
        resolve();
      };
    });
  }
}
