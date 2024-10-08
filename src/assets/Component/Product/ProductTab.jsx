import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProduct from "../hooks/useProduct";
import ShowProduct from "./ShowProduct";
import Product from "./Product";

const ProductTab = () => {
   

    const [tabIndex,setTabIndex] = useState(0);
    const [products]= useProduct();
    const rocking = products.filter(item => item.title === 'rocking')
    const side = products.filter(item => item.title === 'side')
    const lounge = products.filter(item => item.title === 'lounge')


  
    return (
        <div className=" m-20">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Rocking Chair</Tab>
                <Tab>Side Chair</Tab>
                <Tab>Lounge Chair</Tab>
            </TabList>
            <TabPanel>
                <Product items={rocking}></Product>
            </TabPanel>
            <TabPanel>
                <Product items={side} ></Product>
            </TabPanel>
            <TabPanel>
                <Product items={lounge}></Product>
            </TabPanel>
            </Tabs>


        </div>
    );
};

export default ProductTab;