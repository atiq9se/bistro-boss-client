 import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import userMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = userMenu();
    const popular = menu.filter(item=>item.category === 'popular')

    //const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         const popularItems = data.filter(item=>item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // })
    return (
        <div className="my-24">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    popular.map(item=><MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;