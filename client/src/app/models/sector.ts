export class Sector {
	public name: string;
	public id: number;
	constructor(sector?: string, id?: number) {
		this.name = sector;
		this.id = id || null;
	}
}

export class SubSector {
	public name: string;
	public id: number;
	constructor(subSector?: string, id?: number) {
		this.name = subSector;
		this.id = id;
	}
}

export class QP {
	public name: string;
	public QPRefId: string;
	constructor(name?: string, QPRefId?: string) {
		this.name = name;
		this.QPRefId = QPRefId;
	}
}
