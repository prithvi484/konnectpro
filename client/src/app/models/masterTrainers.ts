export class Trainer {
	'id': Number = null;
	'jobRole': String = '';
	'name': String = '';
	'email': String = '';
	'mobileNumber': Number = null;
	'isMaster': Boolean = false;
	'address': any = { 'state': '', 'district': '' };
	'availability': Boolean = false;
	'associatedTC': Array<any> = [];
	'batchId': Array<Number> = [];
	'sector': any = { 'name': '', 'subSector': [] };
	constructor() { }
}
