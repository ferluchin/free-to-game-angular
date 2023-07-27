//filename: filter-games.component.spec.ts
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterGamesComponent } from './filter-games.component';

describe('FilterGamesComponent', () => {
  let component: FilterGamesComponent;
  let fixture: ComponentFixture<FilterGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      declarations: [FilterGamesComponent],
      imports: [HttpClientTestingModule, FormsModule],
    });
    fixture = TestBed.createComponent(FilterGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
