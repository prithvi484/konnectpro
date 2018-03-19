class Identity {
	id: number = null;
	name = '';
}
export class Location {
	public state: Identity;
	public district: Identity;
	public subDistrict: Identity;
	public villageName: Identity;
	public pincode: number;
	constructor(state?: Identity, district?: Identity, subDistrict?: Identity, villageName?: Identity, pincode?: number) {
		this.state = state || new Identity();
		this.district = district || new Identity();
		this.subDistrict = subDistrict || new Identity();
		this.villageName = villageName || new Identity();
		this.pincode = pincode || null;
	}
}


