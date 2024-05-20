import React, { useEffect, useRef, useState } from "react";

const DGXDropdown = ({ setResult, list, data,setData }) => {
  const ref = useRef();
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (data.name) {
      setData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowList(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const handleClick = () => {
    setShowList(true);
  };

  const selectItem = (item) => {
    setShowList(false);
    setData(item);
    setResult(item.name)
  };

  return (
    <>
      <div className="drop-down" ref={ref}>
        <div
          className={`input size text color ${showList && "active"}`}
          onClick={handleClick}
        >
          {data?.key === -1 ? "یک مورد را انتخاب کنید" : data?.name}
        </div>
        {showList && (
          <div className="list size color">
            {list.map((item, index) => (
              <div key={index}>
                <div
                  className="item size text"
                  onClick={() => selectItem(item)}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default DGXDropdown;
