import { Component, Inject, Injector } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit{

  length = 64;
 
  indexPagination = 10;

  goToPage(index: number): void {
      this.indexPagination = index;
      console.info('New page:', index);
  }
  constructor(
    private request: RequestService,
    @Inject(Injector) private readonly injector: Injector,
    private requestService: RequestService
  ) {}

  page = 1

  custom = "abcd"

  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies () {
    this.requestService.getVacancies(this.page, this.custom).subscribe(
      (r) => {
        // логика распечатки вакансии
        console.log("Тест", r)
      },
      (e)=>{
        console.log("Ошибка")
      },
    )
  }

  indexCaorusel = 0;
 
    readonly items = [
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
        'image1.jpg',
    ];

    


}
