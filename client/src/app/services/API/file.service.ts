import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class FileService {
	constructor(private apiService: ApiService) { }
	getFileUploadCredentials(key) {
		const fileUploadCredentialsURL = `${environment.documentServiceUrl}/document/`;
		return this.apiService.get(fileUploadCredentialsURL, {
			key
		});
	}
	uploadFile(file, path, credentials) {
		const formData = new FormData();
		formData.append('key', `${path}/${credentials.Uuid}/${file.name}`);
		formData.append('acl', 'private');
		formData.append('Content-Type', 'image/');
		formData.append('x-amz-meta-uuid', '1436512365127qw');
		formData.append('x-amz-server-side-encryption', 'AES256');
		formData.append('x-amz-credential', `${credentials.Key}/${this.buildTimestamp()}/ap-south-1/s3/aws4_request`);
		formData.append('x-amz-algorithm', 'AWS4-HMAC-SHA256');
		formData.append('x-amz-date', `${this.buildTimestamp()}T000000Z`);
		formData.append('x-amz-meta-tag', '');
		formData.append('policy', credentials.Policy);
		formData.append('x-amz-signature', credentials.Signature);
		formData.append('file', file);
		const S3DocumentUploadURL = 'http://' + credentials.Bucket + '.s3.amazonaws.com/';
		return this.apiService.post(S3DocumentUploadURL, formData);
	}
	private buildTimestamp() {
		const date = new Date();
		const year = date.getFullYear();
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const day = ('0' + date.getDate()).slice(-2);
		const timestamp = year + month + day;
		return timestamp;
	}
}
