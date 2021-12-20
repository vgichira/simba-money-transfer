import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@lib/prisma';
import { comparePassword } from '@utils/helpers';

let userAccount = null;

const options = {
	cookie: {
        secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
    }, 
	// redirect: false, 
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: null, 
			async authorize(credentials: any) {
				const { email, password } = credentials;
				try {
					const user = await prisma.user.findFirst({
						where: {
							email,
						}
					})

					// check if the password is correct
					if (!user || !await comparePassword(password, user.password)) {
						throw new Error("Incorrect credentials");
					}

					userAccount = {
						id: user.id,
						name: user.name,
						email: user.email,
						isActive: user.isActive,
						accountCurrency: user.accountCurrency,

					}; 

					return user;
				} catch (err) {
					throw new Error(err);
				}

				return null;
			},
		})
	],
	secret: process.env.SECRET, 
	callbacks: {
		async signIn({ user }) {
			if (typeof user.id === typeof undefined) {
				return false;
			}

			return user
		},
		async session({ session, token }) {
			if (userAccount !== null) {
                session.user = userAccount;
            } else if (typeof token.user !== typeof undefined 
				&& (typeof session.user === typeof undefined 
                || (typeof session.user !== typeof undefined 
					&& typeof session.user.userId === typeof undefined))) {
                session.user = token.user;
            } else if (typeof token !== typeof undefined) {
                session.token = token;
            }

            return session;
		},
		async jwt({ token, user }) {
			if (typeof user !== typeof undefined)
            {
                token.user = user;
            }

            return token;
		}
	}
}

const nextAuth = (req: any, res: any) => NextAuth(req, res, options);

export default nextAuth;