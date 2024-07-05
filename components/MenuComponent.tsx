const MenuComponent = () => {
    return (
        <div className="display-container">
            <div className='menu-container flex justify-center pt-12'>
                <ul className="list-inside">
                    <li className='m-6 text-2xl'><a href="/intro">Introduction</a></li>
                    <li className='m-6 text-2xl'><a href="/skills">skills</a></li>
                    <li className='m-6 text-2xl'><a href="/products">products</a></li>
                    <li className='m-6 text-2xl'><a href='/blog'>blog</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MenuComponent;
