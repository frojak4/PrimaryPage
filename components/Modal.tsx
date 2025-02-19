"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ children, close }) => {
  const ref = useRef<Element | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#portal");
    setMounted(true);
  });

  return mounted
    ? createPortal(
        <div className="min-h-screen w-screen bg-black bg-opacity-60 transition-opacity place-items-center backdrop-blur-sm z-[999] fixed flex justify-center">
          <button onClick={close} className="fixed left-4 top-4 text-4xl">
            <RxCross2 className="hover:text-error" />
          </button>
          {children}
        </div>,
        ref.current as Element
      )
    : null;
};

export default Modal;
