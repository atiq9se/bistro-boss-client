import { useState } from "react";
import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems = data.filter(item=>item.category === 'popular');
            setMenu(popularItems)
        })
    })
    return (
        <div>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div>
                {
                    menu.map(item=><MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;