import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderCoverImg from '../../../assets/shop/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import userMenu from "../../../hooks/useMenu";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = userMenu();
    const dessert = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category === 'salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')

    return (
        <div>
            <Cover img={orderCoverImg} title="order food"></Cover>

            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    ldjfklkljds
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;