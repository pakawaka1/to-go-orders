import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React To Go</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table of our restaurant's food." />
        </div>
    </Fragment>
}
export default Header