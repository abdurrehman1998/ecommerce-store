import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Splide from '@splidejs/splide';
@Component({
  selector: 'ecommerce-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  bestSellingProducts = [
    'assets/images/barrett-ward-cOJgO4Zzs-w-unsplash.jpg',
    'assets/images/bastian-ignacio-vega-cani-Cbh93NpfWeg-unsplash.jpg',
    'assets/images/fachry-zella-devandra-KvRy5S8hKPw-unsplash.jpg',
    'assets/images/imani-bahati-LxVxPA1LOVM-unsplash.jpg',
    'assets/images/malvestida-magazine-DMl5gG0yWWY-unsplash.jpg',
    'assets/images/paul-volkmer-updW-QUccFE-unsplash.jpg',
    'assets/images/revolt-164_6wVEHfI-unsplash.jpg',
  ];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    new Splide('.splide', {
      autoplay: true,
      type  : 'fade',
      rewind: true,
      perPage:1,
      gap:0,
      padding:0,
    }).mount();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    new Splide('#bestSelling', {
      type: 'loop',
      perPage: 3,
      autoplay: true,
      height     : '15rem',
      cover: true,
      lazyLoad: 'nearby',
    }).mount();
  }
}
