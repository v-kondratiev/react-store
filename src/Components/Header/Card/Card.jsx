import plus from "./../../../assets/plus.svg"
import style from "./Card.module.scss"
import image1 from "../../../assets/img/image-1.jpg"
import heartUnliked from "../../../assets/heart-unkiked.svg"

const Card = () => {
    return (
        <div className={style.Card}>
            <div className={style.favorite}>
                <img src={heartUnliked} alt=""/>
            </div>

            <img className={style.cardImage} src={image1} alt=""/>
            <h5>Lorem ipsum dolor sit amet, consectetur.</h5>

            <div className={style.cardBottom}>
                <div className={style.cardPrice}>
                    <span>Price: </span>
                    <b>75$</b>
                </div>
                <button className={style.addBtn}>
                    <img src={plus} alt=""/>
                </button>
            </div>

        </div>

    )
}
export default Card;