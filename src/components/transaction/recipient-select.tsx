import { useUser } from '@data/use-user';

const RecipientSelect = (props) => {
    const { loading, error, data: users } = useUser();

    if (loading ) return null;

    if (error) {
        console.log(error);
        return null;
    }

    return (
        <>
            <label className="block text-sm text-gray-600 mb-3" htmlFor="cus_email">Select User</label>
            <select disabled={loading} className="w-full px-5 border-[#0891b2] py-4 text-gray-700 
            bg-gray-200 focus:ring-cyan-200 rounded" {...props}>
                <option value="">Select User</option>
                {users.map(({ id, name, email }) => <option key={id} value={id}>{`${name} - ${email}`}</option>
                )}
            </select>
        </>
    )
}

export default RecipientSelect;