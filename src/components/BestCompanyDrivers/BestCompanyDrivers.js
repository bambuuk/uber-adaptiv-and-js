import { Component } from 'react';
import axios from 'axios';
import BestCompanyDriversView from './BestCompanyDriversView';

import './BestCompanyDrivers.sass';


class BestCompanyDrivers extends Component {
    state = {
        data: [
            
        ]
    }

    componentDidMount() {
        axios.get('https://62a11ee47b9345bcbe46a4c5.mockapi.io/drivers')
            .then(res => this.setState({data: res.data}))
            
    }

    render() {
        const listDrivers = this.state.data.map(({name, imgUrl, id}) => {
            return (
                <div className="bestCompDrivers_item" key={id}>
                    <img className="bestCompDrivers_img" src={imgUrl} alt={name} />
                    <p className="bestCompDrivers_name">{name}</p>
                </div>
            )
        })
        return (
            <BestCompanyDriversView listDrivers={listDrivers}/>
        );
    }
}

export default BestCompanyDrivers;