import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import classes from "./SizeSelect.module.css";

import { HiChevronRight } from "react-icons/hi";
import Modal from "../../UI/Helpers/Modal";

const SizeSelect = ({ sizes, sizeError, onSelect, value }) => {
  const router = useRouter();
  const [openSizeList, setOpenSizeList] = useState(null);

  const closeSizeListHandler = () => {
    setOpenSizeList(null);
  };

  useEffect(() => {
    if (openSizeList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSizeList]);

  useEffect(() => {
    router.events.on("routeChangeStart", closeSizeListHandler);
    return () => {
      router.events.off("routeChangeStart", closeSizeListHandler);
    };
  }, [router.events]);

  return (
    <div className={classes.sizes_list}>
      <h3
        onClick={() => {
          setOpenSizeList(true);
        }}
      >
        <p>{!value ? "Sizes." : `Size: ${value}`}</p>
        <i>
          <HiChevronRight />
        </i>
      </h3>
      <Modal
        onClose={closeSizeListHandler}
        title="sizes"
        isOpened={openSizeList}
      >
        <div className={classes.list_wrapper}>
          <ul>
            {sizes.map((size) => (
              <li
                key={size}
                onClick={() => {
                  onSelect(size);
                  setOpenSizeList(null);
                }}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
      {sizeError && <p className={classes.error}>Please Select Size.</p>}
    </div>
  );
};

export default SizeSelect;
