import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { AngularFireModule, FirebaseOptions } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BrowserTransferStateModule } from '@angular/platform-browser';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';

// CUSTOM LIBRARIES
import { VakiFirestoreService, AngularUniversalPlatformService } from '@vaki-challenge/services';

// MOCK DATABASE CLOUD FIRESTORE VAKI CHALLENGE APPLICATION
import { AngularFirestoreMock } from "@vaki-challenge/configurations/test";

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let appComponentFixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(<FirebaseOptions>environment.google['firebase']),
        BrowserTransferStateModule
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
          useValue: new AngularFirestoreMock()
        },
        AngularUniversalPlatformService,
        VakiFirestoreService
      ]
    }).compileComponents();

    appComponentFixture = TestBed.createComponent(AppComponent);
    appComponent = appComponentFixture.componentInstance;
    appComponentFixture.detectChanges();
    h1 = appComponentFixture.nativeElement.querySelector('h1');
  });

  it('should create the app', () =>
    expect(appComponent).toBeTruthy()
  );

  it(`should have a title and contain in title 'Vaki name'`, () =>
    expect(appComponent.title).toContain('Vaki name')
  );

  it(`should render h1 'Vaki name'`, () =>
    expect(h1.textContent).toContain('Vaki name')
  );
});