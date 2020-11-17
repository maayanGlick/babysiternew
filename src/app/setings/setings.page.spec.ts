import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetingsPage } from './setings.page';

describe('SetingsPage', () => {
  let component: SetingsPage;
  let fixture: ComponentFixture<SetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
