import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string, rounds: number) => {
    return await bcrypt.hash(password, rounds)
}

export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash)
}