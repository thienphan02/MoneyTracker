import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';


function Incomes() {
    const {addIncome} = useGlobalContext()
    return(
        <IncomesStyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className='income-content'>
                    <div className='form-container'>
                        
                    </div>
                    <div className='incomes'>

                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    )
}

const IncomesStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`; 

export default Incomes