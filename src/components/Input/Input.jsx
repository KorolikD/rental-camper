import { Field, FormGroup } from './Input.styled';

export const Input = ({
  children,
  type,
  name,
  placeholder,
  $width = '360px',
  $height = '56px',
}) => {
  return (
    <FormGroup htmlFor={name}>
      {children}
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        $width={$width}
        $height={$height}
      />
    </FormGroup>
  );
};
