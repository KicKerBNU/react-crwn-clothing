import {CartIconContainer, ShoppingIconStyle, ItemCount} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.reducer.js";

const CartIcon = () => {
    const dispatch = useDispatch();
    
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconStyle />
            <ItemCount>{cartCount }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;