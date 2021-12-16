import prisma from '@lib/prisma';

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
        default:
            response = null;
            break;
    }

    res.json(response)
}

export default userActions;