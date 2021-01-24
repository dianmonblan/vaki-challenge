import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';

// CUSTOM LIBRARIES
import { VakiFirestoreService } from '@vaki-challenge/services';

// MOCK DATA BASE CLOUD FIRESTORE VAKI CHALLENGE APPLICATION
import { firestore } from "@vaki-challenge/configurations/test";

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let appComponentFixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase'])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true
        },
        {
          provide: AngularFirestore,
          useValue: firestore.mocker
        },
        VakiFirestoreService
      ]
    }).compileComponents();

    appComponentFixture = TestBed.createComponent(AppComponent);
    appComponent = appComponentFixture.componentInstance;
    h1 = appComponentFixture.nativeElement.querySelector('h1');
  });

  it('should create the app', () =>
    expect(appComponent).toBeTruthy()
  );

  it(`should have a title`, () =>
    expect(appComponent).toHaveProperty('title')
  );

  it(`should contain in title 'Vaki name'`, () =>
    expect(appComponent.title).toContain('Vaki name')
  );

  it(`should render h1 'Vaki name'`, () =>
    expect(h1.textContent).toContain('Vaki name')
  );
});