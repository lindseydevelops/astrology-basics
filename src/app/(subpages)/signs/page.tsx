"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import modalStyles from "@/app/components/modal.module.scss";
import Modal from "@/app/components/modal";
import PageIntro from "@/app/components/pageIntro";

const signs = [
  {
    sign: "Aries",
    signIconSrc: "/signs/Sign_Aries.png",
    modality: "Cardinal",
    element: "Fire",
    ruler: "Mars",
    traits: "Ambition, Leadership, Independence, Passion",
    elementClass: styles.fire_sign,
  },
  {
    sign: "Taurus",
    signIconSrc: "/signs/Sign_Taurus.png",
    modality: "Fixed",
    element: "Earth",
    ruler: "Venus",
    traits: "Stability, Hard-working, Sensual, Grounded",
    elementClass: styles.earth_sign,
  },
  {
    sign: "Gemini",
    signIconSrc: "/signs/Sign_Gemini.png",
    modality: "Mutable",
    element: "Air",
    ruler: "Mercury",
    traits: "Inquisitve, Social, Witty, Dualistic",
    elementClass: styles.air_sign,
  },
  {
    sign: "Cancer",
    signIconSrc: "/signs/Sign_Cancer.png",
    modality: "Cardinal",
    element: "Water",
    ruler: "Moon",
    traits: "Sensitive, Intuitive, Empathatic, Moody",
    elementClass: styles.water_sign,
  },
  {
    sign: "Leo",
    signIconSrc: "/signs/Sign_Leo.png",
    modality: "Fixed",
    element: "Fire",
    ruler: "Sun",
    traits: "Leadership, Bravery, Prideful, Loyal",
    elementClass: styles.fire_sign,
  },
  {
    sign: "Virgo",
    signIconSrc: "/signs/Sign_Virgo.png",
    modality: "Mutable",
    element: "Earth",
    ruler: "Mercury",
    traits: "Logical, Organized, Critical, Perfectionistic",
    elementClass: styles.earth_sign,
  },
  {
    sign: "Libra",
    signIconSrc: "/signs/Sign_Libra.png",
    modality: "Cardinal",
    element: "Air",
    ruler: "Venus",
    traits: "Diplomatic, Peace-maker, Harmonious, Indecisive",
    elementClass: styles.air_sign,
  },
  {
    sign: "Scorpio",
    signIconSrc: "/signs/Sign_Scorpio.png",
    modality: "Fixed",
    element: "Water",
    ruler: "Mars",
    traits: "Deep, Intense, Instinctual, Powerful",
    elementClass: styles.water_sign,
  },
  {
    sign: "Sagittarius",
    signIconSrc: "/signs/Sign_Sagittarius.png",
    modality: "Mutable",
    element: "Fire",
    ruler: "Jupiter",
    traits: "Open-minded, Wisdom, Freedom, Spiritual",
    elementClass: styles.fire_sign,
  },
  {
    sign: "Capricorn",
    signIconSrc: "/signs/Sign_Capricorn.png",
    modality: "Cardinal",
    element: "Earth",
    ruler: "Saturn",
    traits: "Authoritarian, Responsible, Mature, Serious",
    elementClass: styles.earth_sign,
  },
  {
    sign: "Aquarius",
    signIconSrc: "/signs/Sign_Aquarius.png",
    modality: "Fixed",
    element: "Air",
    ruler: "Saturn",
    traits: "Intellectual, Individualistic, Rebellious, Innovative",
    elementClass: styles.air_sign,
  },
  {
    sign: "Pisces",
    signIconSrc: "/signs/Sign_Pisces.png",
    modality: "Mutable",
    element: "Water",
    ruler: "Jupiter",
    traits: "Spiritual, Intuitive, Creative, Idealistic",
    elementClass: styles.water_sign,
  },
];

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
    <div className={"flex w-full p-3 relative flex-1 min-h-full "}>
      <button
        className={
          styles.sign +
          " " +
          sign.elementClass +
          " h-52 w-full flex flex-col justify-center items-center shadow-md rounded-md min-h-full"
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
    <main className="grid p-10 max-md:p-5 w-full">
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
        {signs.map((item: any, index: number) => (
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
