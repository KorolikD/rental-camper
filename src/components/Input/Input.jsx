import { Field, FormGroup } from './Input.styled';

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
