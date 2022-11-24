import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna"
    )
    .min(5, 'To short. Minimum 5 letters')
    .max(30, 'To long. Maximum 30 letters')
    .required(),
  number: yup
    .string()
    .trim()
    .min(8, 'To short. Minimum 8 digits')
    .max(30, 'To long. Maximum 30 digits')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});
