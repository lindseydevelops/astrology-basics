import modalStyles from "./modal.module.scss";
import { motion } from "framer-motion";

export default function Modal({
  children,
  closeModal,
  modalState,
}: {
  children: React.ReactNode;
  closeModal: any;
  modalState: boolean;
}) {
  return (
    <div className={modalStyles.modal_wrapper}>
      <motion.div
        className={modalStyles.modal}
        animate={modalState ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "tween",
          duration: 2,
          ease: "circOut",
        }}
      >
        <motion.div
          className={modalStyles.backgrounds_wrapper}
          transition={{
            type: "border-radius",
            duration: 0.35,
            ease: "circOut",
            delay: 0.7,
          }}
        >
          <div className={modalStyles.backgrounds}>
            <motion.div
              className={modalStyles.background}
              animate={modalState ? { scale: 6 } : { scale: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "circOut",
                delay: 0,
              }}
            />
            <motion.div
              className={modalStyles.background}
              animate={modalState ? { scale: 6 } : { scale: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "circOut",
                delay: 0,
              }}
            />
            <motion.div
              className={
                modalStyles.background + " " + modalStyles.background_2
              }
              animate={modalState ? { scale: 6 } : { scale: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "circOut",
                delay: 0.01,
              }}
            />
            <motion.div
              className={
                modalStyles.background + " " + modalStyles.background_3
              }
              animate={modalState ? { scale: 6 } : { scale: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "circOut",
                delay: 0.02,
              }}
            />
            <motion.div
              className={
                modalStyles.background + " " + modalStyles.background_4
              }
              animate={modalState ? { scale: 8 } : { scale: 0 }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: "circOut",
                delay: 0.03,
              }}
            />
          </div>
        </motion.div>
        <motion.div
          className={modalStyles.content}
          animate={
            modalState ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{
            type: "all",
            duration: 0.35,
            ease: "circOut",
            delay: 1,
          }}
        >
          <button className="self-end" onClick={() => closeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-12 w-12"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={"self-center justify-center h-full"}>{children}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
