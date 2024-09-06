import ShowProduct from "./ShowProduct";



const Product = ({items}) => {
    console.log(items)
   
  return (
    <div className="">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    items.map(item => <ShowProduct key={item.id} item={item}></ShowProduct>)
                }
                </div>
    </div>
  );
};

export default Product;
