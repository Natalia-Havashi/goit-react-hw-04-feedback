import { Button, ContainerBtn } from 'components/Reviews.styled';
import PropTypes from 'prop-types';

export const FeedbackOption = ({ options, handleFeedback }) => (
  <ContainerBtn>
    {options.map((option, index) => (
      <Button 
      onClick={() => handleFeedback(option)} 
      key={index}
      >
        {option}
      </Button>
    ))}
  </ContainerBtn>
);


FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedback: PropTypes.func.isRequired,
}
