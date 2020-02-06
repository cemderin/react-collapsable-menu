import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
    display:${(props:any) => props.collapsed ? "block" : "inline-block"};
    margin: 0.125em;
    padding: 0.125em;

    text-decoration: ${(props:any) => props.active && !props.hideInactive ? "underline" : "none"};
`

const Item: React.FC = (props: any) => {
    if(props.hideInactive && !props.active) return null;
    if(props.hideInactive && props.active) return <StyledLi {...props} onClick={props.toggleVisiblity}/>
    return <StyledLi {...props} />
}

export default Item;