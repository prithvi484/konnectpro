export class TPActorsData {
	generalDetailsOfTP: {
		website: string,
		nameOfTheOrganisation: string,
		typeOfOrganisation: string,
		yearOfEstablishment: string,
		landLineNumber: string
	} = {
			website: '',
			nameOfTheOrganisation: '',
			typeOfOrganisation: '',
			yearOfEstablishment: '',
			landLineNumber: ''
	};
	headPointOfContact: {
		fullName: string,
		email: string,
		mobileNumber: string
	} = {
			fullName: '',
			email: '',
			mobileNumber: ''
	};
	authorizedSignatory: [{
		fullName: string,
		email: string,
		mobileNumber: string
	}] = [{
			fullName: '',
			email: '',
			mobileNumber: ''
		}
	];
	financial: {
		yearOfIncorporation: string,
		pan: string,
		gst: string,
		turnoverDetails: Array<{ annualTurnover: string, CACertificateName: string, year: string }>,
		aadhar: string
	} = {
			yearOfIncorporation: '',
			pan: '',
			gst: '',

			turnoverDetails: [
				{ annualTurnover: null, CACertificateName: null, year: '' },
				{ annualTurnover: null, CACertificateName: null, year: '' },
				{ annualTurnover: null, CACertificateName: null, year: '' }
			],
			aadhar: ''
		};
	address: {

		country: string,
		landmark: string,
		state: string,
		stateId: number,
		districtDetails: {
			district: string,
			districtId: number,
			subDistrict: string,
			subDistrictId: number,
			parliamentaryConstituency: string
		},
		pinCode: string,
		locality: string,
		address1: string,
		addressProof: string
	} = {
			country: 'India',
			landmark: '',
			state: '',
			stateId: null,
			districtDetails: {
				district: '',
				districtId: null,
				subDistrict: '',
				subDistrictId: null,
				parliamentaryConstituency: ''
			},
			pinCode: '',
			locality: '',
			address1: '',
			addressProof: ''
	};
	submitForApproval = false;
}
