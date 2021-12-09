type Props = {
    id: string;
    name: string;
    label?: string;
    error?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (key: any) => void;
    [key: string]: unknown;
}

const TextField: React.FC<Props>= ({ label, id, name, ...props }) => {
    return (
    <>
        {label && <label htmlFor={ id } className="text-sm 
        font-medium text-gray-900 block mb-2">{label}</label>}
        <input name={ name } id={ id } 
        className="bg-gray-50 border border-gray-300 
        text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 
        focus:border-cyan-600 block w-full p-2.5" {...props} />
    </>
    );
}

export default TextField;