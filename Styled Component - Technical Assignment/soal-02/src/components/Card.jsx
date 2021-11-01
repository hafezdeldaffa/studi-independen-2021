import {CardContainer, CardImage, CardBody, CardPrice, CardProductName} from './styles/Card';
import Button from '../components/Button'
import React from 'react';

const Card = (props) => {
  const {data} = props
    return (
      <React.Fragment>

      <CardContainer width="500px">
      <CardImage src={data.imageUrl} />
      <CardBody>
        <CardPrice>{data.price}</CardPrice>
        <CardProductName>{data.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
      </React.Fragment>
    )
};

export default Card;
