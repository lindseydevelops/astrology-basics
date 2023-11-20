"use client";
import Image from "next/image";
import PageIntro from "@/app/components/pageIntro";
import galaxyStyles from "../../components/galaxy.module.scss";
import { motion } from "framer-motion";
import * as React from "react";
import modalStyles from "@/app/components/modal.module.scss";
import Modal from "@/app/components/modal";

const planets = [
  {
    planet: "Sun",
    planetImgSrc: "/planets/Planet_Sun.svg",
    traits: "Identify, Ego, Energy, Vitality",
    ringStyle: galaxyStyles.ring_0,
    iconWrapperStyle: galaxyStyles.planet_0,
    type: "Fundamental Planet",
  },
  {
    planet: "Mercury",
    planetImgSrc: "/planets/Planet_Mercury.svg",
    traits: "Communication, Mindset, Expression, Expression, Learning",
    ringStyle: galaxyStyles.ring_1,
    iconWrapperStyle: galaxyStyles.planet_1,
    type: "Personal - Inner Planet",
  },
  {
    planet: "Venus",
    planetImgSrc: "/planets/Planet_Venus.svg",
    traits: "Values, Love, Money, Creativity",
    ringStyle: galaxyStyles.ring_2,
    iconWrapperStyle: galaxyStyles.planet_2,
    type: "Personal - Inner Planet",
  },
  {
    planet: "Moon",
    planetImgSrc: "/planets/Planet_Moon.svg",
    traits: "Soul, Emotions, Intuition, Unconsciousness",
    ringStyle: galaxyStyles.ring_3,
    iconWrapperStyle: galaxyStyles.planet_3,
    type: "Fundamental Planet",
  },
  {
    planet: "Mars",
    planetImgSrc: "/planets/Planet_Mars.svg",
    traits: "Drive, Ambition, Anger, Instincts",
    ringStyle: galaxyStyles.ring_4,
    iconWrapperStyle: galaxyStyles.planet_4,
    type: "Personal - Inner Planet",
  },
  {
    planet: "Jupiter",
    planetImgSrc: "/planets/Planet_Jupiter.svg",
    traits: "Growth, Luck, Beliefs, Optimism",
    ringStyle: galaxyStyles.ring_5,
    iconWrapperStyle: galaxyStyles.planet_5,
    type: "Transpersonal - Middle Planet",
  },
  {
    planet: "Saturn",
    planetImgSrc: "/planets/Planet_Saturn.svg",
    traits: "Karmin lessons, Restrictions, Structures, Responsivility",
    ringStyle: galaxyStyles.ring_6,
    iconWrapperStyle: galaxyStyles.planet_6,
    type: "Transpersonal - Middle Planet",
  },
  {
    planet: "Uranus",
    planetImgSrc: "/planets/Planet_Uranus.svg",
    traits: "Rebellion, Individualization, Freedom, Independence",
    ringStyle: galaxyStyles.ring_7,
    iconWrapperStyle: galaxyStyles.planet_7,
    type: "Generational - Outer Planet",
  },
  {
    planet: "Neptune",
    planetImgSrc: "/planets/Planet_Neptune.svg",
    traits: "Imagination, Spirituality, Creativity, Empathy",
    ringStyle: galaxyStyles.ring_8,
    iconWrapperStyle: galaxyStyles.planet_8,
    type: "Generational - Outer Planet",
  },
  {
    planet: "Pluto",
    planetImgSrc: "/planets/Planet_Pluto.svg",
    traits: "Power, Intensity, Transformation, Extremes",
    ringStyle: galaxyStyles.ring_9,
    iconWrapperStyle: galaxyStyles.planet_9,
    type: "Generational - Outer Planet",
  },
];

const PlanetsModal = ({
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
            src={data.planetImgSrc}
            width={80}
            height={80}
            className={"sign-icon p-2"}
            alt="planet sign icon"
          />
        </div>
        <span>{"Planet: " + data.planet}</span>
        <span>{"Planet Type: " + data.type}</span>
        <br />
        <span>{"Traits: " + data.traits}</span>
      </div>
    </Modal>
  );
};

const PlanetButton = ({
  planet,
  size,
  setOpenModal,
}: {
  planet: any;
  size: number;
  setOpenModal: any;
}) => {
  return (
    <button
      onClick={() =>
        setOpenModal({
          show: true,
          data: {
            planet: planet.planet,
            planetImgSrc: planet.planetImgSrc,
            traits: planet.traits,
            type: planet.type,
          },
        })
      }
      className={galaxyStyles.planet_button + " " + galaxyStyles.planet}
    >
      <Image
        src={planet.planetImgSrc}
        width={size}
        height={size}
        alt={planet.planet + " symbol"}
      />
    </button>
  );
};

const MotionPlanetButton = ({
  planet,
  size,
  setOpenModal,
}: {
  planet: any;
  style: any;
  size: number;
  setOpenModal: any;
}) => {
  return (
    <motion.button
      className={
        planet.iconWrapperStyle +
        " border-2 border-white rounded-full -rotate-45 " +
        galaxyStyles.planet_button +
        " " +
        galaxyStyles.planet
      }
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
      }}
      onClick={() =>
        setOpenModal({
          show: true,
          data: {
            planet: planet.planet,
            planetImgSrc: planet.planetImgSrc,
            traits: planet.traits,
            type: planet.type,
          },
        })
      }
    >
      <motion.div
        className={galaxyStyles.planet_inner}
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      >
        <Image
          src={planet.planetImgSrc}
          width={size}
          height={size}
          alt={planet.planet + " symbol"}
        />
      </motion.div>
    </motion.button>
  );
};

export default function Planets() {
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
    <main className="flex flex-col items-center justify-between p-10 pb-0 max-md:p-5 planets">
      <PageIntro
        header={"The Planets"}
        content={
          "The Planets represent the different aspects of who you are, your life path, temperment and your general vibe. Tap on a planetary sigel below to learn more about it."
        }
      />
      <div
        className={
          "relative rotate-45 -z-10 mt-10 " + galaxyStyles.planets_page
        }
      >
        <div
          className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_backdrop}
        >
          {planets.map((item: any, index: number) => (
            <div
              className={
                galaxyStyles.circle +
                " " +
                galaxyStyles.ring +
                " " +
                item.ringStyle
              }
              key={item.planet}
            />
          ))}
        </div>
        <div
          className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_foreground}
        >
          {planets.map((item: any, index: number) => (
            <div
              className={
                galaxyStyles.circle +
                " " +
                galaxyStyles.ring +
                " " +
                item.ringStyle
              }
              key={item.planet}
            >
              {index == 3 ? (
                <MotionPlanetButton
                  style={galaxyStyles.planet_inner}
                  planet={item}
                  size={50}
                  setOpenModal={setModal}
                />
              ) : (
                <div className={item.iconWrapperStyle + " -rotate-45"}>
                  <PlanetButton
                    planet={item}
                    size={50}
                    setOpenModal={setModal}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {modal.show && modal.data && (
        <PlanetsModal
          closeModal={handleClose}
          data={modal.data}
          modalState={modal.show}
        />
      )}
    </main>
  );
}
