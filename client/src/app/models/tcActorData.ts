export class TCActorsData {
  trainingCentreName: string;
  spoc: {
    firstName: string,
    email: string,
    mobileNumber: string
  } = {
      firstName: '',
      email: '',
      mobileNumber: ''
    };

  address: {

    // country: string,
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
    address2: string,
    address1: string,
    addressProof: string
  } = {
      // country: 'India',
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
      address2: '',
      address1: '',
      addressProof: ''
    };

}
