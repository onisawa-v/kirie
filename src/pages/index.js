import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {
  ActiveTeamRow,
} from '@site/src/components/TeamProfileCards';
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

import styles from './index.module.css';
import { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header style={{ textAlign: "center" }}>
      <div>
        <MouseParallaxContainer
          globalFactorX={0.08}
          globalFactorY={0.0025}
          containerStyle={{
          }}
        >
          <MouseParallaxChild
            factorX={0.8}
            factorY={0.8}
            style={{
              position: "absolute",
              width: "100%",
              left: 0,
              right: 0,
              margin: "auto",
            }}>
            <img src="img/header5.webp" alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.6}
            factorY={0.6}
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto",

            }}>
            <img src="img/header4.webp" alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.4}
            factorY={0.4}
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto"
            }}>
            <img src="img/header3.webp" alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.2}
            factorY={0.2}
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto"
            }}>
            <img src="img/header2.webp" alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={-0.1}
            factorY={-0.1}
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              margin: "auto"
            }}>
            <img src="img/header1.webp" alt="" />
          </MouseParallaxChild>
          <MouseParallaxChild>
            <img src="img/transparent902.webp" alt="" />
          </MouseParallaxChild>
        </MouseParallaxContainer>

        <br />

        <div style={{
          width: "80%",
          left: 0,
          right: 0,
          margin: "auto",
          maxWidth: "900px"
        }}>

          <h1>???????????????????????????????????????????????????</h1>
          <p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          <p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          <p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
          <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
        </div>
        <div style={{
          width: "80%",
          left: 0,
          right: 0,
          margin: "auto",
          maxWidth: "900px",
        }}>
          <img src="img/place.jpg" alt="" style={{ borderRadius: "16px" }} />
        </div>
        <br />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: "10px",
          alignItems: 'center',
        }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/category/?????????????????????????????????" style={{ marginBottom: "16px", }}>
            ????????????????????????????
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/?????????????????????">
            ?????????????????????????
          </Link>
        </div>
        <br />

        <br />
        <h1>??????????????????</h1>

        <ActiveTeamRow />

        {/*
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            ?????????????????????????
          </Link>
        </div>
        <br />
        <br />
*/}
        <div >
          <MouseParallaxContainer
            globalFactorX={-0.1}
            globalFactorY={-0.1}
            containerStyle={{
              height: "720px",
            }}
          >
            <MouseParallaxChild
              factorX={1.0}
              factorY={1.0}
              style={{
                position: "absolute",
                width: "80%",
                maxWidth: "480px",
                left: 0,
                right: 0,
                margin: "auto"
              }}>
              <img src="img/5.webp" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.8}
              factorY={0.8}
              style={{
                position: "absolute",
                width: "80%",
                maxWidth: "480px",
                left: 0,
                right: 0,
                margin: "auto"
              }}>
              <img src="img/4.webp" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              style={{
                position: "absolute",
                width: "80%",
                maxWidth: "480px",
                left: 0,
                right: 0,
                margin: "auto"
              }}>
              <img src="img/3.webp" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              style={{
                position: "absolute",
                width: "80%",
                maxWidth: "480px",
                left: 0,
                right: 0,
                margin: "auto"
              }}>
              <img src="img/2.webp" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={-0.2}
              factorY={-0.2}
              style={{
                position: "absolute",
                width: "80%",
                maxWidth: "480px",
                left: 0,
                right: 0,
                margin: "auto"
              }}>
              <img src="img/1.webp" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              style={{
                width: "80%",
                maxWidth: "480px",
                left: 0,
                right: 0,
                margin: "auto"
              }}>
              <img src="img/transparent724.webp" alt="" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>


        <br />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: "10px",
          alignItems: 'center',
        }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/category/?????????????????????????????????" style={{ marginBottom: "16px", }}>
            ????????????????????????????
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/?????????????????????">
            ?????????????????????????
          </Link>
        </div>
        <br />



        <iframe src="https://www.youtube.com/embed/GdWQEjAsvas"></iframe>

        <br />
        <br />

        <div style={{
          width: "100%",
          left: 0,
          right: 0,
          margin: "auto",
          alignItems: 'center',
          backgroundColor: 'white'
        }}>

          <h1 style={{color: 'black', padding: "30px" }}>???????????????????????????(?????????)</h1>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <a href="https://tenshabi.com/" style={{ width: "400px", maxWidth: "40%", marginRight: "10px", marginLeft: "10px" }}>
              <img
                src='img/tenshabi.png'
                alt="tenshabi"
              />
            </a>
            <a href="https://shachimonaka.com/" style={{ width: "500px", maxWidth: "30%", marginRight: "10px", marginLeft: "10px" }}>
              <img
                src='img/739bd03b12cd8fe8.png'
                alt="??????????????????"
              />
              </a>
            <a href="https://www.dondontei.com/" style={{ width: "500px", maxWidth: "20%", marginRight: "10px", marginLeft: "10px" }}>
              <img
                src='img/dondontei_logo_1_1.jpg'
                alt="???????????????"
              />
            </a>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <a href="https://www.hikky.co.jp/" style={{ width: "200px", maxWidth: "17%", marginRight: "10px", marginLeft: "15px"  }}>
              <img
                src='img/HIKKY_logo_main.png'
                alt="HIKKY"
              />
            </a>
            <a href="https://www.moguravr.com/" style={{ width: "200px", maxWidth: "17%", marginRight: "15px", marginLeft: "15px"  }}>
              <img
                src='img/header-logo-general.png'
                alt="MoguraVR"
              />
            </a>
            <a href="https://vr-lifemagazine.com/" style={{ width: "200px", maxWidth: "17%", marginRight: "15px", marginLeft: "15px"  }}>
              <img
                src='img/2211VLM_logo-renew_color.png'
                alt="????????????????????????????????????"
              />
            </a>
            <a href="https://www.youtube.com/c/OcutanBotVRChannel" style={{ width: "200px", maxWidth: "17%", marginRight: "15px", marginLeft: "10px"  }}>
              <img
                src='img/OcutanVR-Ch_SimpleLogo.png'
                alt="???????????????"
              />
            </a>
          </div>
          <br />
          {/*
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img
              src='img/739bd03b12cd8fe8.png'
              alt="HIKKY"
              style={{ maxWidth: "300px" , margin: "10px" }}
            />
            <img
              src='img/OcutanVR-Ch_SimpleLogo.png'
              alt="HIKKY"
              style={{ maxWidth: "300px" , margin: "10px" }}
            />
            <img
              src='img/tenshabi.png'
              alt="HIKKY"
              style={{ maxWidth: "300px" , margin: "10px" }}
            />
          </div>
          */}
          <br />

        </div>
      </div>

    </header>
  );
}



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="????????????????????????????????????">
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}
