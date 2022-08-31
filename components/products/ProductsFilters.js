import React, { useEffect, useState } from "react";

import classes from "./ProductsFilters.module.css";

import { BsFilterLeft } from "react-icons/bs";
import Modal from "../UI/Helpers/Modal";

const ProductsFilters = ({
  sizes,
  selectFilterSize,
  resetFilterSize,
  filterSize,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);
  return (
    <div className={classes.filters_wrapper}>
      <div className={classes.filters_toggle}>
        <div
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <span>Size Filter</span>
          <i>
            <BsFilterLeft />
          </i>
        </div>
        {filterSize && <span>{`(size: ${filterSize})`}</span>}
      </div>
      <Modal
        isOpened={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
        title="select size"
      >
        <div className={classes.list_wrapper}>
          <ul>
            <li
              onClick={() => {
                resetFilterSize();
                setMenuIsOpen(false);
              }}
            >
              reset
            </li>
            {sizes.map((size) => (
              <li
                key={size}
                className={size === filterSize ? classes.active : ""}
                onClick={() => {
                  selectFilterSize(size);
                  setMenuIsOpen(false);
                }}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default ProductsFilters;
