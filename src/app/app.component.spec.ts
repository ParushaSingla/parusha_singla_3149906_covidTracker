import { TestBed, async, fakeAsync, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { routes } from './core/appRouting/app-routing.module';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'covid-tracking-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('covid-tracking-app');
  });
  it(`check logOut Button should be false if token is null`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    if (sessionStorage.getItem('TOKEN') === null)
      expect(app.logoutEnable).toEqual(false);
  });


  it('should be able to navigate to `/dashBoard` initially',
  fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // initial navigation
    router.navigate(['/'])
      .then(() => {
        expect(router.url).toEqual('/dashBoard');
      });
    }));
});
