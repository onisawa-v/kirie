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

          <h1>切り絵シェーダーアート展ってなに？</h1>
          <p>平面なのに奥行を感じる、不思議な「切り絵シェーダー」で表現された作品が一堂に会するアート展です。</p>
          <p>切り絵シェーダーは何枚もの画像を立体的に重ねることで、イラストや写真のより豊かな表現が可能となりました。</p>
          <p>ひいては、バーチャル空間ならではの表現方法の１つとして、様々な人たちのアイディアや表現方法が見たいと思い、本イベントの開催に至りました。</p>
          <p>本イベントでは、通常のイラストだけではなく写真の使用も可能となっておりますので、皆さま奮ってご参加下さい。</p>
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
            to="/docs/category/出展者向けガイドライン" style={{ marginBottom: "16px", }}>
            参加要項をみる🖼️
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/よくあるご質問">
            よくあるご質問🪄
          </Link>
        </div>
        <br />

        <br />
        <h1>制作スタッフ</h1>

        <ActiveTeamRow />

        {/*
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            製作日誌をみる📒
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
            to="/docs/category/出展者向けガイドライン" style={{ marginBottom: "16px", }}>
            参加要項をみる🖼️
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/よくあるご質問">
            よくあるご質問🪄
          </Link>
        </div>
        <br />



        <iframe src="https://www.youtube.com/embed/GdWQEjAsvas"></iframe>
      </div>

    </header>
  );
}



export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="切り絵シェーダーアート展">
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}
