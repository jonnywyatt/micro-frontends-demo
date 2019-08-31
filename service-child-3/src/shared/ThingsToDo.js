import React from 'react';
import styled from "styled-components";
import fetch from 'node-fetch';

const ImgsWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ImgWrapper = styled.a`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  font-size: 12px;
  vertical-align: top;
`;

const Img = styled.img`
  object-fit: cover;
  height: 150px;
  width: 200px;
`;

export class ThingsToDo extends React.Component {
  static async getData() {
    const items = await fetch('https://app.theculturetrip.com/cultureTrip-api/v1/collections/27870463213093932773?pageType=location_things_to_do&newSlug=true')
      .then(res => res.json())
      .then(json => json.data[0].data)
      .catch(err => {
        console.error(err)
      });
    return {
      items
    }
  }

  constructor(props) {
    super(props);
    const { items } = props;
    this.state = {
      items
    };
  }

  componentDidMount() {
    if (!this.state.items) {
      ThingsToDo.getData()
        .then(({items}) => this.setState({items}))
    }
  }

  render() {
    const items = this.state.items;
    return (
      <div>
        <h1>Things to do</h1>
        <p>This remote component was fetched from <a href="http://localhost:3004/ThingsToDo" target="_blank">http://localhost:3004/ThingsToDo</a></p>
        {
          items ? <ImgsWrapper>
            {
              items.map(item => <ImgWrapper href={`https://theculturetrip.com${item.url}`}>
                  <Img src={item.image} />
                  <div>{item.title}</div>
                </ImgWrapper>
              )
            }
          </ImgsWrapper> : <p>Loading...</p>
        }
      </div>
    );
  }
}
