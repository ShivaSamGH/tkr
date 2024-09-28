import T6 from './../assets/products/06.jpg';

export const HopOnPage = () => {
    return (
        <div className={`w-full`}>
            <div className={`flex flex-wrap lg:flex-nowrap bg-white h-full m-8 rounded-3xl overflow-hidden gap-10`}>
                <img className={`w-max lg:w-1/2 object-contain`} src={T6} alt="hop on page image"/>
                <div className={`m-10`}>
                    <h1 className={`font-bold text-3xl my-8`}>Barca 24/25 Jersey</h1>
                    <p className={`text-xl`}>Another tribute to Manchester's geography sees three lighter shades of blue run through the polo club collar, with the three rivers that flow through the city - the irk, Medlock and Irwell - holding special significance to the Red Devils as "the crossing point where the Theatre of Dreams meets the city"</p>
                    <h1 className={`font-bold text-3xl  my-8`}>Hop on the page &gt;&gt;</h1>
                </div>
            </div>
        </div>
    );
}
