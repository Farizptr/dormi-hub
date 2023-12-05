import multer from 'multer'
import Book from "@models/book";
import { connectToDB } from "@utils/database";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = '@upload/'
        cb(null, destinationPath)
    },
    filename: (req, file, cb) => {
        const filename = Date().toISOString()+'-'+file.originalname
        cb(null, filename)
    }
})
const upload = multer({storage})

export const GET = async (request) => {
    console.log(__dirname)
    
    try {
        await connectToDB()

        const books = await Book.find({})

        return new Response(JSON.stringify(books), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all books", { status: 500 })
    }
};

handler.use(upload.array("image"))

export const POST = async (request) => {
    const { full_name, phone, email, student_id, check_in, student_card, id_card } = await request.json();
    
    try {
        await connectToDB()

        upload.single('file')(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
              return res.status(500).json({ error: 'Multer error' });
            } else if (err) {
              return res.status(500).json({ error: 'Unknown error' });
            }
    
            const newBook = new Book({
                full_name,
                phone,
                email,
                student_id,
                check_in,
                student_card: student_card.name,
                id_card: id_card.name,
            });
            await newBook.save();
    
            return new Response(JSON.stringify(newBook), { status: 200 })
          });
    } catch (error) {
        return new Response("Failed to create new book", { status: 500 })
    }
};