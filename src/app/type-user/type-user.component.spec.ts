import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeUserComponent } from './type-user.component';

describe('TypeUserComponent', () => {
  let component: TypeUserComponent;
  let fixture: ComponentFixture<TypeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
