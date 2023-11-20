"use client";
import styles from "../houses.module.scss";
import Modal from "@/app/components/modal";
import * as React from "react";
import modalStyles from "@/app/components/modal.module.scss";
import PageIntro from "@/app/components/pageIntro";

const houses = [
  {
    house: "12",
    houseTitle: "12th House",
    houseStyle: styles.house_12,
    nativeSign: "Pisces",
    nativeRuler: "Jupiter",
    traits: "Privacy, Solitude, Awakening",
    focus: "Mental Abstract Matters",
  },
  {
    house: "11",
    houseTitle: "11th House",
    houseStyle: styles.house_11,
    nativeSign: "Aquarius",
    nativeRuler: "Saturn",
    traits: "Social Network, Groups, Aspirations, Hopes",
    focus: "Mental Abstract Matters",
  },
  {
    house: "10",
    houseTitle: "10th House",
    houseStyle: styles.house_10,
    nativeSign: "Capricorn",
    nativeRuler: "Saturn",
    traits: "Career, Reputation, Public Persona, Goals",
    focus: "Mental Abstract Matters",
  },
  {
    house: "9",
    houseTitle: "9th House",
    houseStyle: styles.house_9,
    nativeSign: "Sagittarius",
    nativeRuler: "Jupiter",
    traits: "Perspectives, Beliefs, Traditions, Education",
    focus: "Mental Abstract Matters",
  },
  {
    house: "8",
    houseTitle: "8th House",
    houseStyle: styles.house_8,
    nativeSign: "Scorpio",
    nativeRuler: "Mars",
    traits: "Change, Transition, Investments, Taxes",
    focus: "Mental Abstract Matters",
  },
  {
    house: "7",
    houseTitle: "7th House",
    houseStyle: styles.house_7,
    nativeSign: "Libra",
    nativeRuler: "Venus",
    traits: "Relationships, Partneryships, The Other, Marriage",
    focus: "Mental Abstract Matters",
  },
  {
    house: "6",
    houseTitle: "6th House",
    houseStyle: styles.house_6,
    nativeSign: "Virgo",
    nativeRuler: "Mercury",
    traits: "Responsibilities, Routines, Hygine, Health",
    focus: "Body Corporal Matters",
  },
  {
    house: "5",
    houseTitle: "5th House",
    houseStyle: styles.house_5,
    nativeSign: "Leo",
    nativeRuler: "Sun",
    traits: "Creativity, Pleasure, Romance, Children",
    focus: "Body Corporal Matters",
  },
  {
    house: "4",
    houseTitle: "4th House",
    houseStyle: styles.house_4,
    nativeSign: "Cancer",
    nativeRuler: "Moon",
    traits: "Home, Family, Ancesstors, Karma",
    focus: "Body Corporal Matters",
  },
  {
    house: "3",
    houseTitle: "3rd House",
    houseStyle: styles.house_3,
    nativeSign: "Gemini",
    nativeRuler: "Mercury",
    traits: "Communication, Tediousness, Details, Cycles",
    focus: "Body Corporal Matters",
  },
  {
    house: "2",
    houseTitle: "2nd House",
    houseStyle: styles.house_2,
    nativeSign: "Taurus",
    nativeRuler: "Venus",
    traits: "Money, Possessions, Tangibility, Values",
    focus: "Body Corporal Matters",
  },
  {
    house: "1",
    houseTitle: "1st House",
    houseStyle: styles.house_1,
    nativeSign: "Aries",
    nativeRuler: "Mars",
    traits: "The Self, Appearance, Physical Body, Facade",
    focus: "Body Corporal Matters",
  },
];

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
            "The Houses represent the different areas of your life such as your career, relationships, home, family, and friends. In order to figure out your house placements - you must have an accurate birth time. Click on one of the House numbers on the houses chart below to learn more about each house."
          }
        />
      </div>
      <div className={styles.houses}>
        <div className={styles.houses_divided}>
          {houses.map((item: any, index: number) => (
            <div
              className={styles.divider + " " + item.houseStyle}
              key={item.house}
            />
          ))}
          {houses.map((item: any, index: number) => (
            <House
              item={item}
              setOpenModal={setModal}
              key={item.house}
              style={item.houseStyle}
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
