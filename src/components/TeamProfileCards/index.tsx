/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
  return (
    <Link to={to}>
      {children ?? (
        <p>website</p>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  foriioUrl: string;
  skebUrl: string;
  boothUrl: string;
  userIcon: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  foriioUrl,
  skebUrl,
  boothUrl,
  userIcon,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${userIcon}`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {foriioUrl && (
              <Link className="button button--secondary" href={foriioUrl}>
                foriio
              </Link>
            )}
            {skebUrl && (
              <Link className="button button--secondary" href={skebUrl}>
                Skeb
              </Link>
            )}
            {boothUrl && (
              <Link className="button button--secondary" href={boothUrl}>
                BOOTH
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row"
      style={{
        width: "80%",
        margin: "auto",
      }}>
      <TeamProfileCardCol
        name="????????????"
        userIcon="https://github.com/onisawa-v.png"
        twitterUrl="https://twitter.com/onisawa_v"
        boothUrl="https://onisawa.booth.pm/">
        ?????????????????????/????????????????????????/Web???????????????/???????????????????????????
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="????????????"
        userIcon="https://github.com/inunokaicyou.png"
        twitterUrl="https://twitter.com/@inunokaicyou"
        foriioUrl="https://www.foriio.com/inunokaicyou">
        ??????/??????/??????/????????????/??????????????????/????????????????????????/??????????????????????????????????????????
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="_mo_mo_"
        userIcon="https://github.com/momocovr.png"
        twitterUrl="https://twitter.com/momocovr"
        skebUrl="https://skeb.jp/@momocovr">
        ????????????????????????/????????????
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="kame404"
        githubUrl="https://github.com/kame404"
        userIcon="https://github.com/kame404.png"
        twitterUrl="https://twitter.com/kame404">
        ???????????????????????????/Web???????????????/??????????????????????????????/Git??????
      </TeamProfileCardCol>

    </div>
  );
}