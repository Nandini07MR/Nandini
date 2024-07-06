import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { elementAt } from 'rxjs';
import { ChangeBgDirective } from './change-bg.directive';

describe('ChangeBgDirective', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[ChangeBgDirective],
      
     providers:[
      {provide:ElementRef,
        directive:ChangeBgDirective}]   
  }).compileComponents();
})

  it('should create an instance', () => {
    
    expect(ChangeBgDirective).toBeDefined();
  });
  // it('should change background color to green when click on correct answer',()=>{
  //   const targetElement =<HTMLSpanElement>element.querySelector('#green');
  //   targetElement.click(MouseEvent.click);
  //   expect(targetElement.style.backgroundColor).toEqual('')
  //   inputEl.triggerEventHandler('hostlistner',null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('green')
  // })

})
