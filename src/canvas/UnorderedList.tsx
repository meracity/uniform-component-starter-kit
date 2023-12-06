/* eslint-disable */
// @ts-nocheck
import { FC, useState, useEffect } from 'react';
import classNames from 'classnames';
import { registerUniformComponent, ComponentProps } from '@uniformdev/canvas-react';
import { getTextClass } from '@/utils/styling';

export type Props = ComponentProps<{
  id: string;
  source: string;
  title: string;
  description: string;
  data1: object;
}>;

const UnorderedList: FC<Props> = ({
  title,
  text,
  data
  
}) => {
    var myString;
    text? myString = text.split(', '): null;


  

  return (
    <div className='unordered-list'>
        <h1>{title}</h1>
        <ul>
            {text? myString.map((item) => {return(<li>{item}</li>)}): null}
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
