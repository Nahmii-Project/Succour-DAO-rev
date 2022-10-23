// import {useState} from 'react'
import styles from './otherfundraiser.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { data } from './data'

const otherfundraisers = () => {

     return (
           <section className={styles.fundraiser}>
               <div className={styles.wrapper}>
                    <div className={styles.container}>
                    <div className={styles.fundraiser_container}>
                             <div className={styles.fundraiser_header}>
                              <span className={styles.title}>See other fundraisers</span>
                            </div>
                       
                       <Link href="">
                       <div className={styles.fundraiser_grid}>
                               {
                    data?.map(({ id, problemTitle, desc, number, donation }) => {
                       return (
                         <div className={styles.fundraiser_item} key={id}>
                            <div className={styles.fundraiser_img}>
                              <Image src="" className={styles.img} />
                            </div> 
                            <div className={styles.fundraiser_text}>
                              <div className={styles.fundraiser_titled}>{problemTitle}</div>
                              <div className={styles.fundraiser_desc}>
                              {desc}
                              </div>
                              <div className={styles.box}>
                                <div className={styles.box2}></div>
                              </div>
                              <div className={styles.project_voteTiming}>
                                 <div className={styles.left_item}>
                                   <h2 className={styles.number}>{number}</h2>
                                   <h1 className={styles.donation}>{donation}</h1>
                                 </div>
                              </div>
                           </div> 
                         </div>
                              )
                           })
                         }
                     </div>
                     </Link>
                    </div>
                    </div>
               </div>
          </section>
     )
}

export default otherfundraisers
