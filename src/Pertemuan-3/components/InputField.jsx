export default function InputField({label,type,placeholder}){
    return(
        <div className="ab-3">
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <input
            type={type}
            placeholder={placeholder}
            className="w-full [-2 border border-gray-300 rounded"
            />
        </div>
    )
}