import { AnimatePresence, motion } from "motion/react"
import { Fragment, useState } from "react"
import { BookMark, Camera, Feather, Images, Mic } from "./components/svgs";
import { Credits } from "./components/credits";

function App() {
  const [isOpened, setisOpened] = useState(false);

  const actions = [
    { id: 'camera', icon: <Camera /> },
    { id: 'images', icon: <Images /> },
    { id: 'feather', icon: <Feather /> },
    { id: 'bookmark', icon: <BookMark /> },
    { id: 'mic', icon: <Mic /> }
  ]

  function handleClick() {
    if(isOpened) return 

    setisOpened(true)

    setTimeout(() => {
      setisOpened(false)
    }, 2000);
  }

  return (
    <section className="w-full h-dvh flex items-center justify-center overflow-hidden">
      <Credits />
      <div className="w-80 h-60 flex flex-col justify-end gap-4">
        <div className="flex-grow bg-gray-300 rounded-bl-2xl rounded-br-2xl"></div>
        <div className="w-full h-14 relative flex justify-center items-center">
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="absolute left-0 w-10 h-10 stroke-gray-400"
            viewBox="0 0 24 24"
          >
            <circle 
              className="fill-gray-400" 
              cx="12" 
              cy="12" 
              r="10"
            />
            <path 
              className="stroke-white fill-white" 
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
            />
          </svg>
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="absolute right-0 fill-gray-400 w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          <motion.button 
            onClick={handleClick}
            transition={{ bounce: .2, duration: .4 }}
            className="h-12 w-full cursor-default relative flex justify-center items-center z-10 overflow-hidden outline-none"
          >
            <AnimatePresence initial={false}>
              {!isOpened && (
                <motion.span
                  key="text"
                  onClick={handleClick}
                  initial={{ y: -40 }}
                  animate={{ y: 0 }} 
                  exit={{ y: -40 }}
                  transition={{ type: 'spring', duration: .7, bounce: .3 }} 
                  className="inline-block absolute z-20 text-white"
                >
                  Post
                </motion.span>
              )}
            </AnimatePresence>
            {isOpened && (
              <motion.div
                layoutId="button" 
                className="absolute inset-0 bg-black cursor-pointer flex justify-center items-center gap-3"
                style={{ borderRadius: 40 }}
              >
                {actions.map((item, index, array) => (
                  <Fragment key={item.id}>
                    <motion.span
                      layoutId={item.id}
                    >
                      {item.icon}
                    </motion.span>
                    {(array.length - 1) != index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-px h-1/2 rounded-full bg-white/10" 
                      />
                    )}
                  </Fragment>
                ))}
              </motion.div>
            )}
            {!isOpened && (
              <motion.div
                layoutId="button" 
                onClick={handleClick}
                className="absolute w-28 h-full bg-black cursor-pointer flex justify-center items-center"
                style={{ borderRadius: 40 }}
              >
                {actions.map((item) => (
                  <div
                    key={item.id}
                    className="-translate-x-4 translate-y-6"
                  >
                    <motion.span
                      layoutId={item.id} 
                      className="absolute"
                    >
                      {item.icon}
                    </motion.span>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default App
