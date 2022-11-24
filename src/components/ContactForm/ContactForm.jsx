import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { schema } from './Shema';
import {
  InputItem,
  Input,
  InputLabel,
  SubmitBtn,
  ValidationError,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContacts(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputItem>
          <InputLabel>Name:</InputLabel>
          <Input type="text" name="name" />
          <ValidationError component="span" name="name" />
        </InputItem>
        <InputItem>
          <InputLabel>Number:</InputLabel>
          <Input type="tel" name="number" />
          <ValidationError component="span" name="number" />
        </InputItem>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
