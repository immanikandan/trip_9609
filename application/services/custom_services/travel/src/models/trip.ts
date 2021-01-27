
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const tripSchema = new Schema({
   trip_name: String,
   trip_place: String,
   enter_name: String
})

const tripModel = mongoose.model('trip', tripSchema, 'trip');
export default tripModel;
