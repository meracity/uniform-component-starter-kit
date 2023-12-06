/* eslint-disable */
// @ts-nocheck
import { FC } from 'react';
import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';

export type Props = ComponentProps<{
  id: string;
  source: string;
  title: string;
  data: string;
}>;

const RecipeBody: FC<Props> = ({
  data
  
}) => {
   
    
  return (
    <div className='instructions'>
       <p> { data ? data : null}</p>
    </div>
  );
};

registerUniformComponent({
  type: 'recipeBody',
  component: RecipeBody,
});

export default RecipeBody;
