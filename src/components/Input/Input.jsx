import { Field, FormGroup } from './Input.styled';

// ! Підключення
// <Input
//   type={'text'}
//   name={'name'}
//   placeholder={'Name'}
//   $width={'400px'}
//   $height={'56px'}
// />;

export const Input = ({
  type,
  name,
  placeholder,
  $width = '360px',
  $height = '56px',
  style,
}) => {
  return (
    <FormGroup htmlFor="">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        $width={$width}
        $height={$height}
        style={style}
      />
    </FormGroup>
  );
};
