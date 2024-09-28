import T3 from './../assets/products/03.jpg';
import T4 from './../assets/products/04.webp';
import T7 from './../assets/products/07.jpg';
import T8 from './../assets/products/08.jpg';
import T9 from './../assets/products/09.jpg';
import T10 from './../assets/products/10.jpg';

export default function Products(props) {

    const products = [
        {
            id: 1,
            title: 'Product 1',
            image: T3,
        },
        {
            id: 2,
            title: 'Product 2',
            image: T4,
        }, {
            id: 3,
            title: 'Product 3',
            image: T7,
        }, {
            id: 4,
            title: 'Product 4',
            image: T8,
        }, {
            id: 5,
            title: 'Product 5',
            image: T9,
        }, {
            id: 6,
            title: 'Product 6',
            image: T10,
        }
    ];

    return (

        <div className={`m-10`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8`}>
                {products.map((item, index) => {
                    // const imgPath = require(`${item.image}`);
                    return (
                        <div className={`relative h-[20em] w-[15em] overflow-hidden rounded-3xl`} key={item.id}>
                            <img className={`absolute inset-0 w-full h-full object-cover`} src={item.image} alt=""/>
                            <div
                                className={`absolute top-[60%] inset-0 bg-gradient-to-t from-[#000000AD] to-transparent`}></div>

                            <div className={`absolute p-4 bottom-0 left-0 right-0 `}>
                                <a className={`text-white font-bold italic cursor-pointer`}>SHOP
                                    NOW &gt;&gt;</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}
