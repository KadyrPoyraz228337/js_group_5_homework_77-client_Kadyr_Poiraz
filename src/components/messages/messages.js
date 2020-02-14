import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchData} from "../../store/actions/forum";
import dateFormat from 'dateformat'
import {Card} from "reactstrap";

const Messages = props => {
    useEffect(() => {
        props.fetchData();
    }, []);

    return !!props.state.messages && (
        <div className='d-flex flex-column align-items-center border rounded pt-2 bg-light'>
            {props.state.messages.map(message => {
                return (
                    <Card key={message.id} className='flex-row w-75 p-2 mb-2'>
                        <div className='d-flex flex-column'>
                            <div className='d-flex align-items-center'>
                                <h6 className='font-weight-bold m-0'>
                                    <img src="https://pngimage.net/wp-content/uploads/2018/06/no-avatar-png-8.png" alt="" className='mr-2' style={{width: '20px', borderRadius: '50%'}}/>
                                    {message.author}
                                </h6>
                                <p className='m-0 ml-2 text-muted' style={{fontSize: '12px'}}>{dateFormat(message.datetime)}</p>
                            </div>
                            <p className='m-2'>{message.description}</p>
                        </div>
                        {message.image !== 'null' && <img src={`http://localhost:8000/uploads/${message.image}`} className='img-thumbnail w-25 ml-auto' alt="asd"/>}
                    </Card>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
   fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);