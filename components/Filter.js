import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';




const technology = ['html', 'css', 'javascript', 'scss'];

const Filter = ({data, setFilteredData,checkedItems,setCheckedItems}) => {
  const router = useRouter();

  useEffect(() => {
    const tags = Object.keys(checkedItems).filter((tag) => checkedItems[tag]);
    const query = tags.length > 0 ? `?tags=${tags.join(',')}` : '';
  
    // Check if the current URL matches the selected tags before calling `router.push`
    if (router.query.tags !== tags.join(',')) {
      router.push(`/${query}`);
    }
  
    setFilteredData(data.filter((item) =>
      item.tags.some((tag) => checkedItems[tag])
    ));
  }, [checkedItems]);
  

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.value]: event.target.checked,
    });
    
  };

  const handleReset = () => {
    setCheckedItems({
      html: true,
      css: true,
      javascript: true,
      scss: true,
    });
    router.push('/');
  };

  return (
    <form className="fixed px-3 flex sm:flex-col">
      <span className="pr-2">Filter:</span>
      {technology.map((t) => (
        <div key={t} className="flex items-center">
          <input
            name={t}
            className="mr-2"
            type="checkbox"
            value={t}
            checked={checkedItems[t]||false}
            onChange={handleChange}
          />
          <label htmlFor={`${t}Input`} className="text-sm">
            {t}
          </label>
        </div>
      ))}
      <button className="bg-gray-200 px-2 py-1 rounded-lg ml-2" type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Filter;
