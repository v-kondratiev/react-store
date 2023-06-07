import style from "./Header.module.scss"
import logo from "./../../assets/logo.png"
import basket from "./../../assets/basket.svg"
import favorite from "./../../assets/favorite.svg"
import customer from "./../../assets/customer.svg"
import search from "./../../assets/search.svg"
import image1 from "./../../assets/img/image-1.jpg"
import Card from "./Card/Card";
import btnRemove from "./../../assets/btn-remove.svg"
import arrow from "./../../assets/arrow.svg"


const Header = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.overlay}>
                <div className={style.RightSide}>
                    <h2>Basket
                        <img className={style.back__btn} src={btnRemove} alt="Remove"/>
                    </h2>

                    <div className={style.cartItems}>
                        <div className={style.cartItem}>
                            <div className={style.iconImg}>
                                <img src={image1} alt="Product"/>
                            </div>

                            <div className={style.cartItem__info}>
                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                <b>Price: 75$</b>
                            </div>
                            <img className={style.cartItem__btn} src={btnRemove} alt="Remove"/>
                        </div>
                    </div>

                    <div className={style.cartTotalBlock}>
                        <ul>
                            <li>
                                <span>Basket Subtotal:</span>
                                <div></div>
                                <b>75$</b>
                            </li>

                            <li>
                                <span>Discount</span>
                                <div></div>
                                <b>5$</b>
                            </li>
                        </ul>

                        <button className={style.greenBtn}>
                            Buy now <img src={arrow} alt="Arrow"/>
                        </button>

                    </div>


                </div>
            </div>


            <header className={style.Header}>
                <div className={style.headerLeft}>
                    <img src={logo} alt="Logo"/>
                    <div className={style.headerInfo}>
                        <h3>Online Store</h3>
                        <p>Best Store Ever</p>
                    </div>
                </div>

                <ul className={style.headerRight}>
                    <li>
                        <img src={basket} alt="Basket"/>
                        <span>80$</span>
                    </li>
                    <li>
                        <img src={favorite} alt="Favorite"/>
                    </li>
                    <li>
                        <img src={customer} alt="Customer"/>
                    </li>
                </ul>
            </header>

            <section className={style.content}>
                <div className={style.search}>
                    <h1> All Products</h1>
                    <div className={style.searchBlock}>
                        <img src={search} alt="Search"/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                </div>

                <div className={style.product}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </section>
        </div>
    )

}
export default Header;