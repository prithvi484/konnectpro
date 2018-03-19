export class Batch {
startDate: Date;
endDate: Date;
hours: Number;
batchSize: Number;

constructor(startDate?: Date , endDate?: Date , hours?: Number , batchSize?: Number) {
this.startDate = startDate || new Date();
this.endDate = endDate || new Date();
this.hours = hours || null;
this.batchSize = batchSize || null;
}
}
