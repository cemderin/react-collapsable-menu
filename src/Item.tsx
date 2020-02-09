import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`

    display:${(props:any) => props.collapsed || props.stacked ? "block" : "inline-block"};

    margin: 0.125em;
    padding: 0.125em;

    text-decoration: ${(props:any) => props.active && !props.hideInactive ? "underline" : "none"};


`

type ItemProps = {
    hideInactive?: boolean,
    active?: boolean,
    toggleVisiblity?: Function
}

const Item: React.FC<ItemProps> = (props: any) => {
    if(props.hideInactive && !props.active) return null;
    if(props.hideInactive && props.active) return <StyledLi {...props} onClick={props.toggleVisiblity}/>
    return <StyledLi {...props} />
}

export default Item;