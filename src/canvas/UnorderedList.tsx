/* eslint-disable */
// @ts-nocheck
import { FC } from 'react';
import classNames from 'classnames';
import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import { getTextClass } from '@/utils/styling';

export type Props = ComponentProps<{
  id: string;
  source: string;
  title: string;
  description: string;
}>;

const UnorderedList: FC<Props> = ({
  title,
  text,
  data
  
}) => {
    var myString = text.split(', ');
    
  return (
    <div className='unordered-list'>
        <h1>{title}</h1>
        <ul>
            {myString.map((item) => {return(<li>{item}</li>)})}
        </ul>
        <div>
          <ul>
            {data ? Object.keys(data).map((key) => {return(<li> {data[key]}</li>)} ): null}
          </ul>
        </div>
    </div>
  );
};

registerUniformComponent({
  type: 'unorderedList',
  component: UnorderedList,
});

export default UnorderedList;
