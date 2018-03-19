import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';
const testURL = 'http://localhost:3001/user';

describe('ApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ApiService]
		});
	});

	it('should be created', inject([ApiService], (service: ApiService) => {
		expect(service).toBeTruthy();
	}));
});

describe('ApiService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ApiService]
		});

		// Inject the http service and test controller for each test
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});
	afterEach(() => {
		// After every test, assert that there are no more pending requests.
		httpTestingController.verify();
	});

	it('on calling a get method it should make a Http GET Request', inject([ApiService], (service: ApiService) => {
		service.get(testURL);
		const req = httpTestingController.expectOne(testURL);
		expect(req.request.method).toEqual('GET');
		// req.flush();
		httpTestingController.verify();
	}));
});
