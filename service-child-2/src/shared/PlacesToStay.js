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

export class PlacesToStay extends React.Component {
  static async getData() {
    const items = await fetch('https://app.theculturetrip.com/cultureTrip-api/v1/collections/27870463213093932773?pageType=location_places_to_stay&newSlug=true')
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
      PlacesToStay.getData()
        .then(({items}) => this.setState({items}))
    }
  }

  render() {
    const items = this.state.items;
    return (
      <div>
        <h1>Places to stay</h1>
        <p>This remote component was fetched from <a href="http://localhost:3003/PlacesToStay" target="_blank">http://localhost:3003/PlacesToStay</a></p>
        <p>For certain other shared dependencies like React which change less frequently and are bigger, all micro-frontends can share the same files loaded by the parent app. They just need to declare the libraries as 'externals' in their own <code>webpack.config.client.js</code></p>

        <p>This remote component fetched its own data for places to stay:</p>
        {
          items ? <ImgsWrapper>
            {
              items.map(item => <ImgWrapper href={item.url}>
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
