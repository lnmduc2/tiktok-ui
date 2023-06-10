import classNames from 'classnames/bind';
import styles from './Header.module.css';
import React from 'react';
// Thu vien giup dat ten class css co dau gach ngang
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
