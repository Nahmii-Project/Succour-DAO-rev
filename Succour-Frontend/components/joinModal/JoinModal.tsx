import { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './joinmodal.module.scss'
import walletIcon from '../../assets/wallet-1.svg'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

interface IProps {
     showJoinModal: any;
     setShowJoinModal: any;
}

const JoinModal = ({ showJoinModal, setShowJoinModal } : IProps) => {
  const {address} = useAccount();

      const modalRef = useRef<any | any>();
      const [name, setName ] = useState("");
      const [amount, setAmount] = useState("");

      const animation = useSpring({
        config: {
          duration: 300
        }, 
        opacity: showJoinModal ? 1 : 0,
        transform: showJoinModal ? `translateY(0%)` : `translateY(100%)`
      })

      const closeModal = (e :any) => {
          if(modalRef.current === e.target) {
          setShowJoinModal(false)
          }
      }

      const keyPress = useCallback((e :any) => {
        if(e.key === 'Escape' && showJoinModal) {
          setShowJoinModal(false)
        }
      }, [setShowJoinModal, showJoinModal])

      useEffect(() => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
      }, [keyPress])


      return (
          <>
          {showJoinModal ? ( 
          <div className={styles.join} ref={modalRef} onClick={closeModal}>
                {/* animating the whole container properties*/}
                <animated.div style={animation}>
                <div className={styles.wrapper}  showJoinModal={showJoinModal}>
                    <div className={styles.closeButton} onClick={() => setShowJoinModal((prev : any) => !prev)}></div>
                    <div className={styles.container}>
                          <div className={styles.join_content}>
                          <h1 className={styles.title}>Join Succor DAO</h1>

                          <div className={styles.join_input1}>
                            <label>Name</label>
                            <input
                            className={styles.input}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                          </div>

                        <div className={styles.text}>
                          <label>Amount to deposit</label>
                            <div className={styles.join_input}>
                              <div className={styles.wallet_icon}>
                                <Image src={walletIcon} alt="" />
                              </div>
                              <input
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              />
                            <select name="choice">
                              <option value="BTC">BTC</option>
                              <option value="ETH">ETH</option>
                              <option value="USDC">USDC</option>
                              <option value="cUSD" selected>cUSD</option>
                            </select>

                        </div>


                        </div>
                        {
                          address ?
                          <button>Submit</button> :
                          <ConnectButton />
                        }


                    </div>

                    </div>
              </div>
              </animated.div>
          </div>
            ): null}
          </>
     )
}

export default JoinModal
