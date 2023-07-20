import { Messege } from "components/Reviews.styled";

import PropTypes from 'prop-types';

export const Notification = ({message}) => (
    <Messege>{message}</Messege>
)
  
Notification.propTypes = {
    message: PropTypes.string.isRequired
}