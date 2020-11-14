import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  API_KEY = 'https://rickandmortyapi.com/api/character/';

  constructor() { }

  
  getAllCharacters(query='', page = 1){}

  getDetails(id:number){}
}
