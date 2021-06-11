import React, { Component } from 'react';
import BoardService from '../service/SucoTalkService';

class RoomListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        BoardService.getRooms().then((res) => {
            this.setState({rooms: res.data});
        });
    }

    enterRoom(roomId) {
        this.props.history.push(`/room/${roomId}`)
    }


    render() {
        return (
            <div>
                <ul class="list-group">
                    {
                        this.state.rooms.map (
                            room =>
                            <li class="list-group-item list-group-item-action" onClick = {() => this.enterRoom(room.id)} key = {room.id}>
                                {room.name}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default RoomListComponent;