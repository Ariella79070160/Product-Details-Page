import clsx from 'clsx';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

import { useCartContext } from '../../context/CartContext';

const CartButton = ({ disabled }) => {
    const { cartItems } = useCartContext()
    const count = cartItems.length

    return(
        <RouterLink>
            <RiShoppingBag3Line className="size-6" aria-hidden="true" />
            {count > 0 && (
                <div>
                    {count}
                </div>
            )}
        </RouterLink>
    )
}

export default CartButton