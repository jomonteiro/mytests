import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes'
import {Hero} from './hero';

@Injectable()

export class HeroService {
	getHeroes() {
  		 return Promise.resolve(HEROES);
  	}
  	// See the "Take it slow" appendix
	getHeroes1() {
    	return new Promise<Hero[]>(resolve =>
      		setTimeout(()=>resolve(HEROES), 20000) // 2 seconds
    	);
  	}
}
