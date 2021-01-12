import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary';

const errorHandler = (WrappedComponent, axios) => {    
    return class extends Component {
        
        state = {
            error: null,
        }
        
        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null,
                });
                return req;
            });
            axios.interceptors.response.use(res => {
                return res;
            }, newError => {
                this.setState({
                    error: newError,
                });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null,
            })
        }
            render () {
                return (
                    <Auxillary>
                    <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                    </Auxillary>
                )
            }
        
    }
}

export default errorHandler;