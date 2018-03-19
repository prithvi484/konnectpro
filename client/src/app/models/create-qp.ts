export class QPDetails {
	country: {
		countryID: string,
		countryDesc: string
	} = {
			countryID: '1',
			countryDesc: 'India'
		};
	sectors: {
		sectorID: string,
		sectorName: string,
		subSectorID: string,
		subSectorName: string
	} = {
			sectorID: '',
			sectorName: '',
			subSectorID: '',
			subSectorName: ''
		};
	qpCode: string;
	occupation: {
		occupationID: string,
		occupationDesc: string
	} = {
			occupationID: '',
			occupationDesc: ''
		};
	alignedTo: string;
	nsqfLevel: string;
	jobRole: string;
	jobRoleDesc: string;
	personalAttrs: string;
	minEduQual: {
		minEduQualID: string,
		minEduQualDesc: string
	} = {
			minEduQualID: '',
			minEduQualDesc: ''
		};
	maxEduQual: {
		maxEduQualID: string,
		maxEduQualDesc: string
	} = {
			maxEduQualID: '',
			maxEduQualDesc: ''
		};
	preReqLicenseTrng: {
		preReqLicenseTrngID: string,
		preReqLicenseTrngDesc: string
	} = {
			preReqLicenseTrngID: '',
			preReqLicenseTrngDesc: ''
		};
	minJobEntryAge: {
		minJobEntryAgeID: string,
		minJobEntryAge: string
	} = {
			minJobEntryAgeID: '',
			minJobEntryAge: ''
		};
	expReq: {
		expReqID: string,
		expReqDesc: string
	} = {
			expReqID: '',
			expReqDesc: ''
		};
	perfCriteria: string;
	nos: [{
		unitCode: string,
		unitTitle: string,
		description: string,
		version: string,
		sectorID: string,
		sectorName: string,
		subSectorID: string,
		subSectorName: string,
		isCompulsory: true
	}];
}
