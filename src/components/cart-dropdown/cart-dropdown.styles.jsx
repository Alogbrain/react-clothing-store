import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 5px 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    
    .disabled {
        pointer-events: none;
        opacity: 0.8;
    }
`;
export const CartDropDownButton = styled(CustomButton)`
    margin-top: auto;
`;
export const EmptyMessageContainer = styled.span`
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
export const TotalContainer = styled.div`
    margin-top: 10px;
    margin-left: auto;
    font-size: 18px;
`;
