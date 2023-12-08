import Book from "@models/book";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const books = await Book.find({})

        return new Response(JSON.stringify(books), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all books", { status: 500 })
    }
};

export const POST = async (request) => {
    const { full_name, phone, email, student_id, check_in, student_card } = await request.json();
    
    try {
        await connectToDB()

        const newBook = new Book({
            full_name,
            phone,
            email,
            student_id,
            check_in,
            student_card,
        });
        await newBook.save();

        return new Response(JSON.stringify(newBook), { status: 200 })
    } catch (error) {
        return new Response("Failed to create new book", { status: 500 })
    }
};