import Book from "@models/book";
import { connectToDB } from "@utils/database";

export const DELETE = async (request, { params }) => {
    try {
        console.log(params.id)
        await connectToDB()
        const deletedItem = await Book.findOneAndDelete({_id: params.id});
        return new Response(JSON.stringify(deletedItem), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed while deleting a book", { status: 500 })
    }
}