import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav``
const StyledUl = styled.ul`
    list-style-type: none;
    margin: inherit;
    padding: inherit;
`

type MenuProps = {
    collapsed?: boolean
};

const Menu: React.FC<MenuProps> = (props: any) => {
    const [displayCollapesList, setDisplayCollapesList] = useState(false);

    const toggleVisibility = () => {
        setDisplayCollapesList(!displayCollapesList);
    }

    return <StyledMenu {...props}>
        <StyledUl>
            {props.collapsed &&                         React.Children.map(props.children, (child: any) => React.cloneElement(child, { hideInactive: true, toggleVisiblity: toggleVisibility }))}
            {props.collapsed && displayCollapesList &&  React.Children.map(props.children, (child: any) => React.cloneElement(child, {collapsed: props.collapsed}) )}
            {!props.collapsed && props.children}
        </StyledUl>
    </StyledMenu>
}

export default Menu;