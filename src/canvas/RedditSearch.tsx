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

}>;

const RedditSearch: FC<Props> = ({
  title,
  text,
  image
  
}) => {
    var myString;
    text? myString = text.split(', '): null;

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (input) => {
      const query = document.getElementById('input').value;
      const limit = document.getElementById('select').value;
      setIsLoading(true);
      const response = await fetch(`https://api.reddit.com/r/recipes/search?q=${query}&limit=${limit}&restrict_sr=on`);
      const jsonData = await response.json();
      setData(jsonData.data.children.map(child => child.data));
      setIsLoading(false);
      console.log(jsonData);
      console.log(image);
    }

    const checkURL = (url) => {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
    const resetState = () => {
        setData([]);
        setIsLoading(true);
    }

  return (
    <div className='recipes'>
        <h2>Search Reddit r/Recipes</h2>
        <div>
            <input id="input" type="text" placeholder={title}/>
            <select id="select">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <button onClick={fetchData}>Search</button> <button onClick={resetState}>Reset</button></div>
            {isLoading ? null : <div>
            <div className='recipes-container'>
              {data.map(item => (
                <div className='recipes-item' key={item.id}>
                    <a href={'https://www.reddit.com'+item.permalink}>
                        <div className='recipe-card'>
                            <img src={checkURL(item.url) ? item.url : image[0].url} alt={item.title} />
                            <div>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    </a>
                </div>
              ))}
            </div>
          </div>    
          }    
    </div>
  );
};

registerUniformComponent({
  type: 'redditSearch',
  component: RedditSearch,
});

export default RedditSearch;
