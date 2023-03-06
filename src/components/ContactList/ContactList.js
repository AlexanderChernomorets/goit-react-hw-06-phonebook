import PropTypes from 'prop-types';
import {
  ContactsSection,
  ContList,
  ContTitle,
  ContItem,
  ContName,
  ContNum,
  DelButton,
} from './ContactList.styled';

function ContactList({ onRemove, list, findContact }) {

  return (
    <ContactsSection>
      <ContTitle>Contacts</ContTitle>
      <ContList>
        {list.map(({ name, number, id }) => (
          <ContItem key={id}>
            <ContName>{name}: </ContName>
            <ContNum>{number}</ContNum>
            <DelButton
              onClick={() => {
                onRemove(id);
              }}
            >
              Delete
            </DelButton>
          </ContItem>
         
          
        ))} 
      </ContList>
    </ContactsSection>
  );
}

export default ContactList;

ContactList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  findContact: PropTypes.func.isRequired,
};
