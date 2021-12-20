import prisma from '@lib/prisma';
import { getSession } from "next-auth/react";

const userActions = async (req, res) => {
    const { action } = req.query;
    const { data } = req.body;
    let response: any

    switch (action) {
        case "fetch":
            response = await prisma.user.findUnique({
                where: data, 
                select: {
                    id: true, 
                    name: true, 
                    email: true, 
                    accountCurrency: true,
                }
            })
            break;
        case "all":
            const { user } = await getSession({ req });

            response = await prisma.user.findMany({
                where: {
                    isActive: true, 
                    NOT: {
                        email: user.email
                    }
                },
                select: {
                    id: true, 
                    name: true, 
                    email: true, 
                }
            })
            break;
        default:
            response = null;
            break;
    }

    res.json(response)
}

export default userActions;