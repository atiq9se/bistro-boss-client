import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Check it out" heading = "Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div><img src={featuredImg} alt="" /></div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit placeat commodi, voluptatum assumenda harum aliquid natus ducimus quia temporibus facere quo! Dolore voluptates similique, id pariatur error ipsum tenetur!</p>
                    <button className="btn btn-outline">Order</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;