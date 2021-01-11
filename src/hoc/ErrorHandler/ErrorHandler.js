import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary';

const errorHandler = (WrappedComponent, axios) => {    
    return class extends Component {
        
        state = {
            error: null,
        }
        
        componentDidMount() {
            axios.interceptors.response.use(null, newError => {
                this.setState({
                    error: newError,
                });
            });
        }
            render () {
                return (
                    <Auxillary>
                    <Modal show>
                        Something Didn't work
                    </Modal>
                    <WrappedComponent {...this.props} />
                    </Auxillary>
                )
            }
        
    }
}

export default errorHandler;