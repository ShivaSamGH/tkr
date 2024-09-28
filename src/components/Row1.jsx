import T1 from './../assets/products/01.jpg';
import T2 from './../assets/products/02.jpg';
import T5 from './../assets/products/05.jpg';

export const Row1 = (props) => {
    const products = [
        {
            img: T1,
            description: 'Manchester United 24/25',
            showShopNow: true
        }, {
            img: T2,
            description: 'Manchester City 24/25',
            showShopNow: true
        }, {
            img: T5,
            description: 'EXPLORE ALL THE JERSEYS >>',
            showShopNow: false
        }
    ];
    return (
        <div className={`flex flex-wrap gap-8 justify-center`}>
            {products.map((item, index) => {
                // const imgPath = require(`${item.image}`);
                return (
                    <div className={`relative`} key={index}>
                        <img className={`max-h-[70vh] lg:max-h-[40vh]  rounded-3xl`} src={item.img} alt=""/>
                        <div className={`absolute top-[60%] inset-0 bg-gradient-to-t from-[#000000AD] to-transparent`}></div>
                        <div className={`absolute p-4 bottom-0 left-0 right-0 `}>
                            <h2 className={`text-2xl font-bold text-white`}>{item.description}</h2>
                            {item.showShopNow && <a className={`text-primaryHighlight font-bold italic cursor-pointer`}>SHOP NOW &gt;&gt;</a>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
