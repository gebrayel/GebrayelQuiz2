import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { take } from "rxjs/operators"
type RequestInfo = {
  next:string;
};
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  characters: Character[] = [];
  info: RequestInfo = {
    next: null,
  };
private pageNum = 1;
private query:string;
private hideScrollHeight = 200;
private showScrollHeight = 500;


  constructor(private apiRequest: ApiRequestService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters():void{
    this.apiRequest.getAllCharacters(this.query, this.pageNum).pipe(take(1)).subscribe((res:any) =>{
      const results = res.data.results;
      const info = res.data.info;
      console.log('response: ', results)
      this.characters = [...this.characters, ... results];
      this.info=info;
      console.log(this.info)
    })
  }

}
