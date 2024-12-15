import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-library',
  templateUrl: './rxjs-library.component.html',
  styleUrls: ['./rxjs-library.component.css']
})
export class RxjsLibraryComponent {
  //observable
  data1 = [3,5,8,9]
  data2 = ['a','b','c']
  myObservable = new Observable((observer) => {
    //observer.next([1,2,3,4,5])

    setTimeout(() =>{
      observer.next(1)
    },1000);
    setTimeout(() =>{
      observer.next(2)
    },2000);
    setTimeout(() =>{
      observer.next(3)
    },3000);
    setTimeout(() =>{
      observer.error(new Error('Error occured!'))
    },4000);
    setTimeout(() =>{
      observer.complete()
    },5000);
});
myObservable2 = of(this.data1,this.data2,200,'ansari')
myObservable3 = from(this.data1)
//observer
getAsyncData(){
 /* this.myObservable.subscribe(
    ((val:any) =>{
    console.log(val);
  }),
  
  ((err) =>{
    alert(err.message)
  }
)),
() =>{
  alert(
    'All data streamed..'
  )
}*/
this.myObservable.subscribe({
  next: (val:any) => console.log(val),
  error: (err) => console.log(err.message),
  complete: () => console.log('All data streamed!')
})
}
}
