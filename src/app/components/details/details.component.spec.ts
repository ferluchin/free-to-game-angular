// filename: details.component.spec.ts
import { ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailsComponent } from './details.component';
import { of, BehaviorSubject } from 'rxjs';
import { convertToParamMap } from '@angular/router';

// Define ActivatedRouteStub
class ActivatedRouteStub {
  private paramMapSubject = new BehaviorSubject(convertToParamMap({ id: 1 }));
  paramMap = this.paramMapSubject.asObservable();

  snapshot = {
    paramMap: convertToParamMap({ id: 1 }),
  };

  setParamMap(params?: any) {
    this.paramMapSubject.next(convertToParamMap(params));
    this.snapshot.paramMap = convertToParamMap(params);
  }
}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    // Antes de ejecutar detectChanges, seteamos los valores que queremos en el snapshot.
    activatedRoute.setParamMap({ id: 1 });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
