import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ApiRequestService } from 'src/app/services/api-request.service';
import { take , filter } from "rxjs/operators"
import { ActivatedRoute, NavigationEnd, ParamMap , Router} from '@angular/router';
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
private pageNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,282,9,30,31,34,33,34];
private query:string;
private hideScrollHeight = 200;
private showScrollHeight = 500;


  constructor(private apiRequest: ApiRequestService, private route: ActivatedRoute, private router: Router) {
    this.onUrlChanged
   }

  ngOnInit(): void {
    this.getCharactersbyQuery();
  }

  private onUrlChanged(): void{
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)).subscribe(
        ()=>{
          this.characters=[];
          this.pageNum = 1;
          this.getCharactersbyQuery();
        }
      )
    
  }

  getCharactersbyQuery():void{
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap)=>{
      console.log(this.route)
      console.log(params)
      this.query = params ['q'];
      this.getCharacters();

    });
    
  }

  getCharacters():void{
    for(let element in this.pageNums)
    this.apiRequest.getAllCharacters(this.query, parseInt(element)).pipe(take(1)).subscribe((res:any) =>{
      if( res?.data?.results?.length){
      const results = res.data.results;
      const info = res.data.info;
      this.characters = [...this.characters, ... results];
      this.info=info;
      }else{
        this.characters = []
      }
      
  });
}
}

