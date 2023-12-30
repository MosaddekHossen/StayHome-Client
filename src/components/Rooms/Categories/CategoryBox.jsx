import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {

    const { params, setParams } = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <div
            onClick={handleClick}
            className="flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer"
        >
            <Icon />
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default CategoryBox;