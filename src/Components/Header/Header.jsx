import style from "./Header.module.scss"
import logo from "./../../assets/logo.png"
import basket from "./../../assets/basket.svg"
import favorite from "./../../assets/favorite.svg"
import customer from "./../../assets/customer.svg"
import Card from "./Card/Card";

const Header = () => {
    return (
        <div className={style.wrapper}>
            <header className={style.Header}>
                <div className={style.headerLeft}>
                    <img src={logo} alt="logo"/>
                    <div className={style.headerInfo}>
                        <h3>Online Store</h3>
                        <p>Best Store Ever</p>
                    </div>
                </div>

                <ul className={style.headerRight}>
                    <li>
                        <img src={basket}/>
                        <span>80$</span>
                    </li>
                    <li>
                        <img src={favorite}/>
                    </li>
                    <li>
                        <img src={customer}/>
                    </li>
                </ul>
            </header>

            <section className={style.content}>
                <h1> All Products</h1>
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