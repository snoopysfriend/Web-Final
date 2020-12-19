import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'


function Header() {
    const [activeItem, setActiveItem] = useState({});

    const handleItemClick = (e, { name }) => setActiveItem(name)
    return (
        <>
        <Menu>
            <Menu.Item>
            <img src='/logo.png' />
            </Menu.Item>
            <Menu.Item
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={handleItemClick}
            />
            <Menu.Item
            name='jobs'
            active={activeItem === 'jobs'}
            onClick={handleItemClick}
            />
            <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
            onClick={handleItemClick}
            />
        </Menu>
        </>
    )
    
}
export default Header;