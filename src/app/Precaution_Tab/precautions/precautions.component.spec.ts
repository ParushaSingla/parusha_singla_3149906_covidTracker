import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionsComponent } from './precautions.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a title 'Precaution'`, async(() => {
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Precautions');
  }));

  it(`should have a quote 'STAY HOME.SAVE LIVES.'`, async(() => {
    component.quote = 'STAY HOME.SAVE LIVES.';
    fixture.detectChanges();

    const bannerDe: DebugElement = fixture.debugElement;
    const headingDe = bannerDe.query(By.css('h1'));
    const h1: HTMLElement = headingDe.nativeElement;

    expect(h1.textContent).toEqual('STAY HOME.SAVE LIVES.');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
