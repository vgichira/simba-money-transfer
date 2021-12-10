type Props = {
    id: string;
    label?: string;
    error?: any;
    onChange: (key: any) => void;
    [key: string]: unknown;
}

const TextField: React.FC<Props>= ({ label, id, error, ...props }) => {
    return (
    <>
        {label && <label htmlFor={ id } className="text-sm 
        font-medium text-gray-900 block mb-2">{label}</label>} 
        <input id={ id } 
        className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300' }  
        text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 
        focus:border-cyan-600 block w-full p-2.5`} {...props} />
        <p className="mt-2 text-sm text-red-500 dark:text-gray-400">{error}</p>
    </>
    );
}

export default TextField;