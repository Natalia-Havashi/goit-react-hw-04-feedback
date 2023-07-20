import { Container, Feedback} from "components/Reviews.styled"
import PropTypes from 'prop-types';

export const Section = ({title, children}) => (
    
    <Container>
        <Feedback>{title}</Feedback>
        {children}
    </Container> 
    );

    Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.object.isRequired,
    }