"use client";
import Image from "next/image";
import PageIntro from "@/app/components/pageIntro";
import galaxyStyles from "../../components/galaxy.module.scss";
import { motion } from "framer-motion";
import * as React from "react";
import modalStyles from "@/app/components/modal.module.scss";
import Modal from "@/app/components/modal";
import planets from "../../data/planets.json";

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
            className={"sign-icon p-2 max-h-24"}
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
      className={
        galaxyStyles.planet_button +
        " " +
        galaxyStyles.planet +
        " rotate-90 max-md:rotate-0"
      }
    >
      <div className="-rotate-45">
        <Image
          src={planet.planetImgSrc}
          width={size}
          height={size}
          alt={planet.planet + " symbol"}
        />
      </div>
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
        galaxyStyles.planet +
        " border-2 border-white rounded-full -rotate-45 " +
        galaxyStyles.planet_button
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
          "relative -rotate-45 max-md:rotate-45 -left-1/4 max-lg:-left-1/2 max-md:left-0 max-md:scale-150 top-20 -z-10 mt-10 transition ease-in-out delay-150 " +
          galaxyStyles.planets_page
        }
      >
        <div
          className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_backdrop}
        >
          {planets.planets.map((item: any, index: number) => (
            <div
              className={galaxyStyles.circle + " " + galaxyStyles.ring}
              key={item.planet}
            />
          ))}
        </div>
        <div
          className={galaxyStyles.galaxy + " " + galaxyStyles.galaxy_foreground}
        >
          {planets.planets.map((item: any, index: number) => (
            <div
              className={galaxyStyles.circle + " " + galaxyStyles.ring}
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
                <PlanetButton planet={item} size={50} setOpenModal={setModal} />
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
