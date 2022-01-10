import React from 'react'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import StoreBanner from '../components/store-banner'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>OttoV2</title>
        <meta property="og:title" content="OttoV2" />
      </Helmet>
      <div data-role="Header" className={styles['HeaderContainer']}>
        <header className={styles['Header']}>
          <div className={styles['Logo']}>
            <img
              alt="image"
              src="/playground_assets/logotype-dark.svg"
              className={styles['image']}
            />
          </div>
          <div className={styles['Menu']}>
            <span className={styles['text']}>About</span>
            <span className={styles['text01']}>Products</span>
            <span className={styles['text02']}>Pricing</span>
            <span className={styles['text03']}>Blog</span>
            <span className={styles['text04']}>Jobs</span>
            <span className={styles['text05']}>More</span>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
          <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
            <svg viewBox="0 0 1024 1024" className={styles['Menu1']}>
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className={styles['MobileMenu']}>
          <div className={styles['Top']}>
            <div className={styles['Logo1']}>
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className={styles['image01']}
              />
            </div>
            <div data-type="CloseMobileMenu" className={styles['CloseMenu']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon05']}>
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className={styles['Mid']}>
            <span className={styles['text06']}>About</span>
            <span className={styles['text07']}>Products</span>
            <span className={styles['text08']}>Pricing</span>
            <span className={styles['text09']}>Blog</span>
            <span className={styles['text10']}>Jobs</span>
            <span className={styles['text11']}>More</span>
          </div>
          <div className={styles['Bot']}>
            <div className={styles['container01']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link']}
              >
                <div className={styles['container02']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon07']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link1']}
              >
                <div className={styles['container03']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon09']}
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link2']}
              >
                <div className={styles['container04']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={styles['icon11']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link3']}
              >
                <div className={styles['container05']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Main']}>
        <div className={styles['BlurBackground']}></div>
        <div className={styles['Hero']}>
          <div className={styles['container06']}>
            <h1
              className={` ${styles['Heading']} ${projectStyles['headline1']} `}
            >
              <span>
                No te quedes con
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                las ganas de
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>escalar.</span>
            </h1>
            <PrimaryButton button="Me apunto"></PrimaryButton>
          </div>
          <img
            alt="image"
            src="/playground_assets/phone%20mockuphomemap.svg"
            className={styles['image02']}
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/green%20circle.svg"
          className={styles['TurquoiseCirble']}
        />
        <img
          alt="image"
          src="/playground_assets/brown%20circle.svg"
          className={styles['PurpleCircle']}
        />
        <img
          alt="image"
          src="/playground_assets/left1.svg"
          className={styles['Left']}
        />
        <img
          alt="image"
          src="/playground_assets/right1.svg"
          className={styles['Right']}
        />
      </div>
      <div className={styles['Belay']}>
        <div className={styles['container07']}>
          <h2 className={` ${projectStyles['headline2']} ${styles['text17']} `}>
            <span className={styles['text18']}>
              Encuentra a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>tu nuevo compaÃ±ero de escalada.</span>
          </h2>
          <span className={` ${styles['text20']} ${projectStyles['lead1']} `}>
            <span className={styles['text21']}>
              No pierdas la ocasiÃ³n de disfrutar de la escalada por falta de un
              compaÃ±ero que te asegure. â¨OttoÂ® te permite encontrar la persona
              que mejor se adapte a tu estilo y nivel de escalada.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/cover%20image.svg"
          image_src="/playground_assets/iPhoneX-1200w.png"
          className={styles['image03']}
        />
      </div>
      <div className={styles['Community']}>
        <div className={styles['container08']}>
          <div className={styles['Content']}>
            <h3
              className={` ${styles['text22']} ${projectStyles['headline3']} `}
            >
              Comunidad
            </h3>
            <span className={` ${styles['text23']} ${projectStyles['lead1']} `}>
              <span className={styles['text24']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </span>
            </span>
          </div>
          <div className={styles['Phone']}>
            <img
              alt="image"
              src="/playground_assets/iphone%20xcommunity1.svg"
              className={styles['image04']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Feature1']}>
        <div className={styles['container09']}>
          <img
            alt="image"
            src="/playground_assets/iphone%20x.svg"
            image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
            className={styles['image05']}
          />
        </div>
        <div className={styles['container10']}>
          <h3 className={projectStyles['headline3']}>Todas las info</h3>
          <span className={` ${styles['text26']} ${projectStyles['lead1']} `}>
            <span className={styles['text27']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
        </div>
      </div>
      <div className={styles['Features']}>
        <h2 className={` ${projectStyles['headline2']} ${styles['text28']} `}>
          Tailor-made features
        </h2>
        <span className={styles['text29']}>
          <span className={styles['text30']}>
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </span>
        </span>
        <div className={styles['Features1']}>
          <FeatureCard title="Robust workflow"></FeatureCard>
          <FeatureCard
            title="Flexibility"
            image_src="/playground_assets/02.svg"
          ></FeatureCard>
          <FeatureCard
            title="User friendly"
            image_src="/playground_assets/03.svg"
          ></FeatureCard>
          <FeatureCard
            title="Multiple layouts"
            image_src="/playground_assets/04.svg"
          ></FeatureCard>
          <FeatureCard
            title="Better compoents"
            image_src="/playground_assets/05.svg"
          ></FeatureCard>
          <FeatureCard
            title="Well organized"
            image_src="/playground_assets/06.svg"
          ></FeatureCard>
        </div>
      </div>
      <div className={styles['Testimonials']}>
        <div className={styles['container11']}>
          <div className={styles['container12']}>
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className={styles['image06']}
            />
            <h1
              className={` ${styles['text31']} ${projectStyles['headline2']} `}
            >
              Real Stories from Real Customers
            </h1>
            <span>Get inspired by these stories.</span>
            <div className={styles['container13']}>
              <TestimonialsCard image_src="/playground_assets/logo-4.svg"></TestimonialsCard>
            </div>
          </div>
          <div className={styles['container14']}>
            <div className={styles['container15']}>
              <TestimonialsCard
                src="/playground_assets/logo-1.svg"
                text="I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
                text1="Jane Cooper"
                text2="CEO, Airbnb"
                image_src="/playground_assets/logo-1.svg"
              ></TestimonialsCard>
            </div>
            <div className={styles['container16']}>
              <TestimonialsCard
                text="Landify saved our time in designing my company page."
                text1="Kristin Watson"
                text2="Co-Founder, FedEx"
                image_src="/playground_assets/logo-2.svg"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Achievements']}>
        <div className={styles['container17']}>
          <h2 className={styles['text33']}>
            <span className={styles['text34']}>
              Our 18 years of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>achievements</span>
          </h2>
          <span className={styles['text37']}>
            <span className={styles['text38']}>
              With our super powers we have reached this
            </span>
          </span>
        </div>
        <div className={styles['container18']}>
          <div className={styles['container19']}>
            <StatsCard
              number="10,000+"
              image_src="/playground_assets/01.svg"
              description="Downloads per day"
            ></StatsCard>
            <StatsCard
              number="2 Milion"
              image_src="/playground_assets/04.svg"
              description="Users"
            ></StatsCard>
          </div>
          <div className={styles['container20']}>
            <StatsCard number="500+" description="Clients"></StatsCard>
            <StatsCard
              number="140"
              image_src="/playground_assets/07.svg"
              description="Countries"
            ></StatsCard>
          </div>
        </div>
      </div>
      <div className={styles['CTA']}>
        <div className={styles['container21']}>
          <div className={styles['container22']}>
            <h2
              className={` ${projectStyles['headline2']} ${styles['text39']} `}
            >
              <span className={styles['text40']}>
                Manage your projects from your mobile
              </span>
            </h2>
            <span className={` ${styles['text41']} ${projectStyles['lead1']} `}>
              <span className={styles['text42']}>
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </span>
            </span>
            <span
              className={` ${styles['text43']} ${projectStyles['subtitle2']} `}
            >
              <span className={styles['text44']}>Get the App</span>
            </span>
            <StoreBanner></StoreBanner>
          </div>
          <div className={styles['container23']}>
            <img
              alt="image"
              src="/playground_assets/iPhoneX-1200w.png"
              image_src="/playground_assets/iPhoneX-1200w.png"
              className={styles['image07']}
            />
            <img
              alt="image"
              src="/playground_assets/iPhoneX-1200w.png"
              image_src="/playground_assets/iPhoneX-1200w.png"
              className={styles['image08']}
            />
          </div>
        </div>
      </div>
      <div className={styles['Footer']}>
        <footer className={styles['container24']}>
          <img
            alt="image"
            src="/playground_assets/logotype-light.svg"
            className={styles['image09']}
          />
          <div className={styles['container25']}>
            <span className={styles['text45']}>About</span>
            <span className={styles['text46']}>Features</span>
            <span className={styles['text47']}>Pricing</span>
            <span className={styles['text48']}>Careers</span>
            <span className={styles['text49']}>Help</span>
            <span className={styles['text50']}>Privacy Policy</span>
          </div>
          <div className={styles['Divider']}></div>
          <div className={styles['container26']}>
            <span className={` ${styles['text51']} ${projectStyles['body2']} `}>
              Â© 2020 Landify UI Kit. All rights reserved
            </span>
            <div className={styles['container27']}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link4']}
              >
                <div className={styles['container28']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon15']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link5']}
              >
                <div className={styles['container29']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon17']}
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link6']}
              >
                <div className={styles['container30']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={styles['icon19']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link7']}
              >
                <div className={styles['container31']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon21']}>
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
