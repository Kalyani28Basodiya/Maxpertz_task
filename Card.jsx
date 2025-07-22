import React from 'react'
import styled from 'styled-components';
const Card = ({ data }) => {
    // console.log(props)
    return (
        <Wrapper className='main-container'>
            <h2 className='comman-heading'>Science Fiction Stories</h2>
            <div className="container ">
                {
                    data.map((currEle) => {
                        const { id, Status, Image, Title } = currEle;

                        return (
                            <div className="card" key={id}>
                                <div className='img'>
                                    <img src={`https://ik.imagekit.io/dev24/${Image?.[0]}`} alt="img" />

                                </div>
                                <div className="card-data">
                                    <p>{Title}</p>
                                    <p className='status'>{Status}</p>
                                   
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
    text-align: center;
    background-color: #4e3798;
    width: 65rem;
    height: 100%;
    padding-top:5px ;

.container{
     
    border-radius: 2px solid red;
     background-color: #333391;
    text-align: center;
     display: grid;
  grid-template-columns: repeat(4, 1fr);
  }
  p{
    font-size: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
.status{
    font-size: 15px;
    background-color: #d6d6e7;
    border-radius: 10px;
    color: black;
    font-weight: bolder;
}
  .card{
    margin: 12px;
      background-color: #7a7ae7;
      padding: 10px;
      border-radius: 8px;
  }
   .img img{
     width: 13rem;
     height: 10rem;
     border-radius: 10px;
    }  
`

export default Card