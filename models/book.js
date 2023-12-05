import { Schema, model, models } from 'mongoose';

const BookSchema = new Schema({
  full_name: {
    type: String,
    required: [true, 'Full name is required!'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required!'],
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
  },
  student_id: {
    type: String,
    required: [true, 'Student ID is required!'],
    unique: [true, 'Student ID already exists!'],
  },
  check_in: {
    type: String,
    required: [true, 'Check-in date is required!'],
  },
  student_card: {
    type: String,
    required: [true, 'Student card is required!'],
  },
  id_card: {
    type: String,
    required: [true, 'Id card is required!'],
  },
});

const Book = models.Book || model("Book", BookSchema);

export default Book;