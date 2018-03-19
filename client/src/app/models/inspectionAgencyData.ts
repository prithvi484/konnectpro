export class InspectionAgencyActorData {
    id?: number;
    userName?: string;
    registeredDate: Date = new Date();
    generalDetails: {
        'companyName': string,
        'firstName': string,
        'lastName': string,
        'email': string,
        'mobile': string,
        'otp': string
    } = {
            'companyName': '',
            'firstName': '',
            'lastName': '',
            'email': '',
            'mobile': '',
            'otp': ''
        };
    address: {
        'country': string,
        'landmark': string,
        'state': string,
        'districtDetails': {
            'district': string,
            'subDistrict': string
        },
        'pinCode': string,
        'locality': string,
        'address2': string,
        'address1': string
    } = {
            'country': 'IN',
            'landmark': '',
            'state': '',
            'districtDetails': {
                'district': '',
                'subDistrict': ''
            },
            'pinCode': '',
            'locality': '',
            'address2': '',
            'address1': ''
        };
    spoc: {
        'firstName': string,
        'lastName': string,
        'mobile': string,
        'email': string
    } = {
            'firstName': '',
            'lastName': '',
            'mobile': '',
            'email': ''
        };
}
