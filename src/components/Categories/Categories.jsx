import { CategoriesList } from './Categories.styled';

export const Categories = ({ categories }) => {
  return (
    <CategoriesList>
      {categories.map((category) => {
        return (
          <li key={category.id}>
            <p>{category.title}</p>
          </li>
        );
      })}
    </CategoriesList>
  );
};
