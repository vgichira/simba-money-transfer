import prisma from '@lib/prisma';
import { hashPassword } from '@utils/helpers';

const newUser = async (req, res) => {
    try {
        if (req.method !== 'POST') {
            res.status(405).json({error: "Method not allowed"})
            return
        }

        const { name, email, currency, password } = req.body;

        // check if the email address already exists
        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(userExists) {
            res.status(422).json({error: "Email already exists"})
            return
        }

        const hashedPass = await hashPassword(password, 10);

        const user = await prisma.user.create({
            data: {
                name, 
                email, 
                accountCurrency: currency, 
                isActive: true, 
                password: hashedPass
            }
        })

        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            accountCurrency: user.accountCurrency,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default newUser;