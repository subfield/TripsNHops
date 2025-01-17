import * as L from "@/app/_libs";
import * as T from "@/types"

const isFocused = L.S<boolean>(!!0);

const Input: React.FC<T.InputProps> = ({
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = !!0,
    error,
    className = "",
    label,
    required = !!0,
    icon: Icon,
    onIconClick,
}) => {

    const setIsFocused = (value: boolean) => {
        isFocused.value = value;
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div
                className="relative flex items-center w-full"
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    onFocus={() => setIsFocused(!!1)}
                    onBlur={() => setIsFocused(!!0)}
                    className={`w-full pl-4 pr-10 py-3 border rounded-xl hover:border-primary-300 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 ease-in-out placeholder-primary-400 placeholder:italic focus:placeholder-primary-200 ${disabled
                        ? "bg-primary-100 text-primary-800 border-primary-300 cursor-not-allowed"
                        : "bg-primary-50 text-primary-400"
                        } ${error ? "border-red-800" : "border-primary-200"} ${className}`}
                />
                {Icon && (
                    <button
                        type="button"
                        onClick={onIconClick}
                        disabled={disabled}
                        className={`absolute right-3 transition-all duration-300 ease-in-out ${disabled
                                ? "cursor-not-allowed text-primary-200"
                                : isFocused.value
                                    ? "text-primary-200"
                                    : "text-primary-400"
                            }`}
                    >
                        <Icon size={20} />
                    </button>
                )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
