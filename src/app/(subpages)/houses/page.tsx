"use client";
import styles from "../houses.module.scss";
import Modal from "@/app/components/modal";
import * as React from "react";
import modalStyles from "@/app/components/modal.module.scss";
import PageIntro from "@/app/components/pageIntro";
import houses from "../../data/houses.json";

const House = ({
  item,
  setOpenModal,
  style,
}: {
  item: any;
  setOpenModal: any;
  style: any;
}) => {
  return (
    <div
      className={
        styles.house_button_container + " " + styles.house_divider + " " + style
      }
    >
      <button
        className={styles.house_button}
        onClick={() =>
          setOpenModal({
            show: true,
            data: {
              house: item.houseTitle,
              nativeRuler: item.nativeRuler,
              nativeSign: item.nativeSign,
              traits: item.traits,
              focus: item.focus,
            },
          })
        }
      >
        <span
          className={"text-xl max-md:text-lg max-sm:text-md max-xs:text-sm"}
        >
          {item.house}
        </span>
      </button>
    </div>
  );
};

const HousesModal = ({
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
        <span>{"House: " + data.house}</span>
        <span>{"Planetary Ruler: " + data.nativeRuler}</span>
        <span>{"Native Sign: " + data.nativeSign}</span>
        <br />
        <span>{"Traits: " + data.traits}</span>
        <span>{"Focus: " + data.focus}</span>
      </div>
    </Modal>
  );
};

export default function Houses() {
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
    <main className="flex flex-col h-full items-center justify-center p-10 max-md:p-5 mb-20">
      <div className={"pb-5"}>
        <PageIntro
          header={"The Houses"}
          content={
            "The Houses represent the different areas of your life such as your career, relationships, home, family, and friends. In order to figure out your house placements - you must have an accurate birth time. Your rising sign/ascendant is where you first house begins. Click on one of the House numbers on the houses chart below to learn more about each house."
          }
        />
      </div>
      <div className={styles.houses + " overflow-x-hidden"}>
        <div className={styles.houses_divided}>
          {houses.houses.map((item: any, index: number) => (
            <div
              className={styles.divider + " " + styles.house}
              key={item.house}
            />
          ))}
          {houses.houses.map((item: any, index: number) => (
            <House
              item={item}
              setOpenModal={setModal}
              key={item.house}
              style={styles.house}
            />
          ))}
        </div>
      </div>
      <div className={styles.house_descriptions}>
        {modal.show && modal.data && (
          <HousesModal
            closeModal={handleClose}
            data={modal.data}
            modalState={modal.show}
          />
        )}
      </div>
    </main>
  );
}
