import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoriesData";

const Categories = () => {
    const [params] = useSearchParams(); // , setParams
    const category = params.get('category');

    return (
        <>
            <Container>
                <div className="pt-4 flex items-center overflow-x-auto justify-between">
                    {
                        categories?.map(
                            item => <CategoryBox key={item.label}
                                label={item.label}
                                icon={item.icon}
                                selected={category === item.label}
                            />
                        )
                    }
                </div>
            </Container>
        </>
    );
};

export default Categories;