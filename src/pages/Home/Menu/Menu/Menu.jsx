import { Helmet } from 'react-helmet-async';
import Cover from '../../../../Shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg'
import desertImg from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import userMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = userMenu();
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Hello World</title>
            </Helmet>

            <Cover img={menuImg} title="our menu"></Cover>

            <SectionTitle subHeading="Don't Miss" heading="Today's Offter"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={dessert} title={"dessert"} img={desertImg}></MenuCategory>

            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;