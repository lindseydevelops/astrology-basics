"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import modalStyles from "@/app/components/modal.module.scss";
import Modal from "@/app/components/modal";
import PageIntro from "@/app/components/pageIntro";
import signs from "../../data/signs.json";

const SignCard = ({ sign, setOpenModal }: { sign: any; setOpenModal: any }) => {
  React.useEffect(() => {
    const signStyles = document.querySelectorAll(styles.sign);
    signStyles.forEach((sign) => {
      sign.addEventListener("click", () => {
        sign.classList.add(styles.active);
      });
    });
  });
  return (
    <div
      className={
        "flex w-full p-3 relative flex-1 min-h-full " + styles.sign_card
      }
    >
      <button
        className={
          styles.sign +
          " h-52 w-full flex flex-col justify-center items-center shadow-md rounded-md min-h-full hover:-translate-y-3"
        }
        onClick={() =>
          setOpenModal({
            show: true,
            data: {
              sign: sign.sign,
              modality: sign.modality,
              element: sign.element,
              traits: sign.traits,
              ruler: sign.ruler,
              signIconSrc: sign.signIconSrc,
            },
          })
        }
      >
        <Image
          src={sign.signIconSrc}
          width={80}
          height={80}
          className={"sign-icon pb-4"}
          alt="zodiac sign icon"
        />
        <span className={"text-3xl max-sm:hidden"}>{sign.sign}</span>
      </button>
    </div>
  );
};

const SignsModal = ({
  closeModal,
  modalState,
  data,
}: {
  closeModal: any;
  modalState: boolean;
  data: any;
}) => {
  return (
    <Modal closeModal={closeModal} modalState={modalState}>
      <div
        className={
          "flex flex-col text-2xl max-md:text-xl h-full justify-center"
        }
      >
        <div className={"pb-4"}>
          <Image
            src={data.signIconSrc}
            width={80}
            height={80}
            className={"sign-icon p-2"}
            alt="zodiac sign icon"
          />
        </div>
        <span>{"Sign: " + data.sign}</span>
        <span>{"Modality: " + data.modality}</span>
        <span>{"Element: " + data.element}</span>
        <br />
        <span>{"Traits: " + data.traits}</span>
        <br />
        <span>{"Planetary Ruler: " + data.ruler}</span>
      </div>
    </Modal>
  );
};

export default function Signs() {
  const [modal, setModal] = React.useState({ show: false, data: null });

  const handleClose = () => {
    setModal({ show: false, data: null });
  };

  const onModalOpen = () => {
    document.body.classList.add(modalStyles.modal_active);
    document.body.style.overflow = "hidden";
  };
  const onModalClose = () => {
    document.body.classList.remove(modalStyles.modal_active);
    document.body.style.overflowY = "auto";
  };
  React.useEffect(() => {
    modal.show ? onModalOpen() : onModalClose();
  }, [modal]);

  return (
    <main className="grid p-10 max-md:p-5 w-full mb-20">
      <PageIntro
        header={"The Signs"}
        content={
          "The zodiac signs represent how you act out the energy of the planets, and the general vibe in the area of your life the house sign occupies. Each clickable sign below contains a brief description about the sign in question."
        }
      />
      <div
        className={
          "w-full grid grid-flow-row grid-cols-3 grid-rows-12 max-md:grid-cols-2 max-md:grid-cols-1"
        }
      >
        {signs.signs.map((item: any, index: number) => (
          <SignCard sign={item} setOpenModal={setModal} key={item.sign} />
        ))}
        {modal.show && modal.data && (
          <SignsModal
            closeModal={handleClose}
            data={modal.data}
            modalState={modal.show}
          />
        )}
      </div>
    </main>
  );
}
